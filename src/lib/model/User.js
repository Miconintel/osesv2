import mongoose from "mongoose";

const schemaOptions = {
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
};

// creating schema

const userSchema = mongoose.Schema(schemaOptions, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// schema midllewares

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
