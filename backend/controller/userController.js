import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// why: registration logic belongs in separate controller

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required" });

    if (!validator.isEmail(email))
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });

    if (password.length < 8)
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // ✅ Corrected line
    const token = createToken(user._id);

    return res.json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.json({ success: false, message: "Server error", error: err.message });
  }
};

// why: login controller handles authentication & token issuing
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({
        message: "Login successful",
        success: true, // 🔥 IMPORTANT
        user: { id: user._id, name: user.name, email: user.email },
        token,
      });
    } else {
      return res.json({ success: false, message: "Invalid Creditional" });
    }
  } catch (err) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const adminController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);

      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export { registerController, loginController, adminController };
