const express = require("express")
import Service from './../../frontend/src/pages/dashboard/service/Service';
const router = express.Router()



// POST /api/services/add
router.post("/add", async (req, res) => {
  try {
    const { name, experience, price, description, availability } = req.body;

    // Basic validation
    if (!name || !experience || !price || !availability || !Array.isArray(availability)) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Create new service
    const newService = new Service({
      name,
      experience,
      price,
      description, // optional
      availability,
    });

    // Save to DB
    const savedService = await newService.save();

    res.status(201).json({
      message: "Service added successfully",
      service: savedService,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// services
router.get("/services", async (req, res) => {
  try {
    // সব সার্ভিস fetch করা হচ্ছে
    const services = await Service.find().sort({ createdAt: -1 }); // নতুন সার্ভিস আগে দেখাবে

    res.status(200).json({
      message: "Services fetched successfully",
      services,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// single service
router.post("/add", async(req, res)=>{

})

// edit service
router.post("/add", async(req, res)=>{

})

// servce status update
router.post("/add", async(req, res)=>{

})

module.exports = router