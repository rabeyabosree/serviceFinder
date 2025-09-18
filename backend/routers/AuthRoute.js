const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()

// registr as customer
router.post("/customer", async (req, res) => {
    try {
        const { name, email, password, role, location } = req.body;

        if (!name || !email || !password || !role) {
            res.status(400).json({ message: "Please full fill the all required field" })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role,
            location: location
        })

            (await newUser).save()

        res.status(200).json({ message: "Customer user register successfully", user: newUser })
    } catch (error) {
        res.status(500).json({ message: "Customer register error" })
        console.error("server error", error)

    }

})

// register as provier
router.post("/provider", async (req, res) => {
    try {
        const { name, email, password, role, service, location, availability } = req.body;

        if (!name || !email || !password || !role) {
            res.status(400).json({ message: "Please full fill the all required field" })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role,
            service: service,
            location: location,
            availability: availability
        })

            (await newUser).save()

        res.status(200).json({ message: "Customer user register successfully", user: newUser })
    } catch (error) {
        res.status(500).json({ message: "Customer register error" })
        console.error("server error", error)

    }
})

// login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "please fill-up the required fileds" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const metchPassword = await bcrypt.compare(password, user.password)
        if (!metchPassword) {
            return res.status(400).json({ message: "Wrong password" })
        }

        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        res.status(200).json({
            message: "login successfully", user: {
                id: user._id,
                name: user.name,
                email: user.email
            }, token: token
        })

    } catch (error) {
        res.status(500).json({ message: "login error" })
        console.error("server error", error)

    }
})

// forget password 
router.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const resetToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: "15m" })

        user.resetToken = resetToken
        user.expireResetToken = Date.now + 15 * 60 * 1000
        await user.save()

        const resetLink = `http://localhost:5173/reset-password/${resetToken}`
        res.status(200).json({ message: "Password reset link", resetLink })

    } catch (error) {
        res.status(500).json({ message: "forgot password error" })
        console.error("server error", error)

    }

})

router.get("/reset-password/:token", async (req, res) => {
    try {
        const { token } = req.params
        const decode = jwt.decode(token, process.env.SECRET_KEY)

        res.status(200).json({ valid: true, userId: decode.id })

    } catch (error) {
        res.status(500).json({ message: "invalid or expired token" })
        console.error("server error", error)

    }

})

router.post("/reset-password/:token", async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        const decode = jwt.decode(token, process.env.SECRET_KEY)
        const user = await User.findById(decode.id)
        if(!user){
            return res.status(404).json({message: "user not found"})
        }

        const hasdpassword = await bcrypt.hash(newPassword, 10)
        user.password = hasdpassword
        user.resetToken = null
        user.expireResetToken = null

        await user.save()

        res.status(200).json({message: "Password reset successfully"})
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token" });

    }

})

// logout
router.post("/logout", async (req, res) => {

})


module.exports = router
