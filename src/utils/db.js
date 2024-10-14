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
  await mongoose.connect(process.env.MONGODB_URI);
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
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export const saveUser = async (userData) => {
  await mongoose.connect(process.env.MONGODB_URI);
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  const user = new User(userData);
  await user.save();
};

export const getUsers = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  return await User.find();
};
