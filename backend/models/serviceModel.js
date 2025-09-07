const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
  category: { type: String },       // e.g., Plumbing
  experience: { type: Number, min: 0 },
  price: { type: Number },
  availability: [
    {
      day: { type: String, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      start: { type: String }, // "09:00"
      end: { type: String },   // "17:00"
    },
  ],
  rating: { type: Number, default: 0, min: 0, max: 5 }, // service-specific rating
  reviews: [reviewSchema], // reviews for this service
});

module.exports = serviceSchema