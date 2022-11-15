import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "completed", "pastdue"],
      default: "active",
    },
    note: String,
    due: Date,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "list",
      required: true,
    },
  },
  { timestamps: true }
);

itemSchema.index({ list: 1, name: 1 }, { unique: true });
export const Item = mongoose.model("item", itemSchema);
