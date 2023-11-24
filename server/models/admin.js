// models/admin.js
import mongoose from "mongoose";

// Create a admin schema
const adminSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
  },
  otpExpire: {
    type: Date,
  },
});

// Create a admin model
const Admin = mongoose.model("Admin", adminSchema);

// Export the admin model
export default Admin;
