import mongoose from "mongoose";
import bcrypt from "bcrypt";

// why: schema enforces structure and validation
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

export default User;
