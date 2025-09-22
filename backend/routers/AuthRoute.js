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

// forgot password
router.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User Not found" })
        }

        const resetCode = Math.floor(100000 + Math.random() * 900000).toString()
        const expireResetCode = Date.now() + 15 * 60 * 1000

        user.resetCode = resetCode;
        user.expireResetCode = expireResetCode

        await user.save()

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Reset Password Code",
            text: `Your Reset Password code ${resetCode} `
        })

        res.status(200).json({ message: "Reset password code send your email" })


    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

// verify otp
router.post("/verify-otp", async (req, res) => {
    try {
        const { email, resetCode } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User Not found" })
        }

        if (user.resetCode !== resetCode) {
            return res.status(400).json({ message: "Invalid Reset code" })
        }
        if (user.expireResetCode < Date.now()) {
            return res.status(400).json({ message: "Expired Reset code" })
        }

        res.status(200).json({ message: "Reset code verify success" })


    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

// reset password
router.post("/reset-password", async (req, res) => {
    try {
        const { email, newPassword } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User Not found" })
        }

        const hashPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashPassword
        user.resetCode = null
        user.expireResetCode = null

        await user.save()

        res.status(200).json({ message: "Password reset successfully" })


    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

// logout
router.post("/logout", async (req, res) => {

})


module.exports = router
