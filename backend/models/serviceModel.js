const mongoose = require("mongoose");

// Review schema (user generated)
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 0, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Main Service schema
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },       // e.g., Plumbing
  experience: { type: Number, min: 0, required: true },
  price: { type: Number, required: true },
  availability: [
    {
      day: { 
        type: String, 
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
        required: true 
      },
      start: { type: String, required: true }, // "09:00"
      end: { type: String, required: true },   // "17:00"
    },
  ],
  description: { type: String }, // optional provider description
  rating: { type: Number, default: 0, min: 0, max: 5 }, // average rating from reviews
  reviews: [reviewSchema], // array of user reviews
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", serviceSchema);
