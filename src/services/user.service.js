const bcrypt = require("bcryptjs");

const User = require("../models/user.models");
const { generateToken } = require("../utils/response");

exports.registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });

  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }

  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  return {
    message: "User created successfully",
    user: {
      id: user._id,
      name: user.username,
      email: user.email,
    },
  };
};

exports.loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user);

  return {
    message: "Login successful",
    access_token: token,
    user: {
      id: user._id,
      name: user.username,
      email: user.email,
    },
  };
};

exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return {
    message: "User profile retrieved successfully",
    user: {
      id: user._id,
      name: user.username,
      email: user.email,
    },
  };
};
