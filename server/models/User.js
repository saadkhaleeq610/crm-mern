import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'sales_representative', 'manager'],
    default: 'sales_representative'
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to check password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  console.log("Matching password...");
  console.log("Entered password (first 4 characters):", enteredPassword.substring(0, 4));
  console.log("Stored password hash:", this.password);
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  console.log("Password match result:", isMatch);
  return isMatch;
};

const User = mongoose.model('User', UserSchema);

export default User;