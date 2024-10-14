import mongoose from "mongoose";
import bcrypt from "bcryptjs";

let isConnected = false;

const connectToDatabase = async () => {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  }
};

const ConfigSchema = new mongoose.Schema({
  page2: { components: [String] },
  page3: { components: [String] },
});

const Config = mongoose.models.Config || mongoose.model("Config", ConfigSchema);

export const getConfig = async () => {
  await connectToDatabase();
  let config = await Config.findOne();
  if (!config) {
    // Set default configuration
    config = new Config({
      page2: { components: ["aboutMe"] },
      page3: { components: ["address"] },
    });
    await config.save();
  }
  return config;
};

export const saveConfig = async (newConfig) => {
  await connectToDatabase();
  let config = await Config.findOne();
  if (config) {
    config.page2 = newConfig.page2;
    config.page3 = newConfig.page3;
    await config.save();
  } else {
    config = new Config(newConfig);
    await config.save();
  }
};

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  aboutMe: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  birthdate: Date,
  currentStep: Number,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export const saveUser = async (userData) => {
  await connectToDatabase();
  const user = await User.findOne({ email: userData.email });
  if (user) {
    // Update existing user
    Object.assign(user, userData);
    await user.save();
  } else {
    // Create new user
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = new User(userData);
    await newUser.save();
  }
};

export const getUsers = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  return await User.find();
};

export const updateUserProgress = async (email, userData, currentStep) => {
  await connectToDatabase();
  const user = await User.findOne({ email });
  if (user) {
    // Update existing user
    Object.assign(user, userData);
    user.currentStep = currentStep;
    await user.save();
  } else {
    // Create new user
    const newUser = new User({
      ...userData,
      currentStep,
    });
    await newUser.save();
  }
};

export const getUserProgress = async (email) => {
  await connectToDatabase();
  const user = await User.findOne({ email });
  if (user && user.currentStep !== undefined) {
    return user.currentStep;
  }
  return 0; // Default to step 0 if not found
};
