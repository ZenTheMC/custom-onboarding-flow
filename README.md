Custom Onboarding Flow Application
This project is a customizable onboarding flow application built with Next.js and MongoDB.
It allows administrators to configure the onboarding steps for users, collect user data, and display it in a data table.

The application consists of three main sections:
User Onboarding Section
Admin Configuration Section
User Data Table

Table of Contents:

1. Features
2. Demo
3. Technologies Used
4. Getting Started
5. Prerequisites
6. Installation
7. Environment Variables
8. Running the Application
9. Project Structure
10. Usage
11. User Onboarding Flow
12. Admin Configuration
13. User Data Table
14. Customization
15. Deployment
16. License
17. Acknowledgements

Features:

1. Customizable Onboarding Flow: Admins can select which data components appear on each onboarding page.
2. Wizard Interface: Users are guided through a multi-step onboarding process with progress indicators.
3. Data Collection Components:
4. About Me: Large text area for users to describe themselves.
5. Address: Form fields for street address, city, state, and zip code.
6. Birthdate: Date picker for users to select their birthdate.
7. Data Persistence: User data is saved to a MongoDB database.
8. Progress Persistence: Users can return to where they left off in the onboarding flow.
9. Admin Interface: Accessible at /admin, allowing configuration of onboarding steps.
10. User Data Table: Accessible at /data, displaying collected user data.
11. Responsive Design: The application is responsive and user-friendly across devices.

Live Demo:
custom-onboarding-flow-three.vercel.app

## Technologies Used:

Frontend:
Next.js (React Framework)
React Hooks
CSS for styling

Backend:
Node.js
MongoDB
Mongoose

Deployment:
Vercel

## Getting Started:

Prerequisites:
Node.js (version 14 or above)
npm (Node Package Manager)
MongoDB Atlas Account (or a local MongoDB instance)

## Installation:

Clone the Repository:
git clone <SSH>
cd custom-onboarding-flow

Install Dependencies:
npm install

Environment Variables:
PRIVATE

## Running the Application:

Development Mode:
npm run dev
The application will be available at http://localhost:3000

## Project Structure:
├── src<br>
│ ├── app<br>
│ │ ├── api<br>
│ │ │ ├── config<br>
│ │ │ │ └── route.js<br>
│ │ │ ├── save-progress<br>
│ │ │ │ └── route.js<br>
│ │ │ ├── complete-registration<br>
│ │ │ │ └── route.js<br>
│ │ │ ├── get-progress<br>
│ │ │ │ └── route.js<br>
│ │ │ └── users<br>
│ │ │ └── route.js<br>
│ │ ├── admin<br>
│ │ │ └── page.js<br>
│ │ ├── data<br>
│ │ │ └── page.js<br>
│ │ ├── page.js<br>
│ │ └── layout.js<br>
│ ├── components<br>
│ │ ├── Wizard.js<br>
│ │ ├── SignupForm.js<br>
│ │ ├── MultiStep.js<br>
│ │ ├── AboutMe.js<br>
│ │ ├── Address.js<br>
│ │ ├── Birthdate.js<br>
│ │ └── FinalStep.js<br>
│ └── utils<br>
│ └── db.js<br>
├── public<br>
│ └── (static assets)<br>
├── styles<br>
│ └── globals.css<br>
├── .env.local<br>
├── package.json<br>
├── README.md<br>
└── next.config.js<br>

## Usage:

Create an Account: Enter your email and password.

Complete Onboarding Steps:
Fill out the data components as configured by the admin.
Navigate through the steps using the "Next" button.

Progress Persistence:
If you leave the application after submitting your email and password, you can return later and resume where you left off.

## Admin Configuration:

Access Admin Interface:
Navigate to /admin

Configure Onboarding Steps:
Select which data components appear on Page 2 and Page 3
Ensure each page has at least one component
Click the "Save Configuration" button

Changes Reflect Immediately:
The onboarding flow updates based on the new configuration

## User Data Table:

Access Data Table:
Navigate to /data

View Collected Data:
The table displays user data stored in the database
Data includes email, about me, address, and birthdate

Real-Time Updates:
Refresh the page to see new user entries as they are added

License:
This project is licensed under the MIT License.

Acknowledgements:
Next.js Documentation
MongoDB Documentation
Vercel Documentation
Mongoose Documentation
React Documentation
