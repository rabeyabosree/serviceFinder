const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

const PORT = process.env.PORT

// cors
app.use(cors(
    {
        origin: "http://localhost:5173", // fronten url
        credentials: true
    }
))

// json and formdat data middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//mongoose connection
const MOBGO_URI = process.env.MONGO_URI
mongoose.connect(MOBGO_URI)
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log("Mongodb error", err))


// auth 
const authRoute = require("./routes/authRoute")
app.use("/api/auth", authRoute)

// app listening
app.listen(PORT, () => { console.log(`Server is running at http://localhost:${PORT}`) })

// app response
app.use("/", (req, res) => {
    res.send("Hello world")
})