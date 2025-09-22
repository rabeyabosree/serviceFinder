const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["Customer", "Provider"],
        default: "Customer",
        required: true
    },

    avatar: { type: String },
    service: { type: String },
    location: { type: String },
    availability: [
        {
            day: { type: String, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
            start: { type: String }, // "09:00"
            end: { type: String },   // "17:00"
        },
    ],
    resetCode: { type: String },
    expireResetCode: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
