import userModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Registering a new User
export const registerUser = async (req, res) => {
  const newUser = await userModel(req.body);
  const { email } = req.body;
  try {
    // Checking if the email already exists
    const oldUser = await userModel.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ error: "This email is already registered" });
    };
    const user = await newUser.save();

    // JWT Authentication
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ user, token });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login a User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Checking if user has given password and username both
    if (!email || !password) {
      return res.status(400).json({ error: "Please Enter Email & Password" });
    };
    const user = await userModel.findOne({ email });

    // If user enter wrong password or email
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    };

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(401).json({ error: "Invalid email or password" });
    };

    // JWT Authentication
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ user, token });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};