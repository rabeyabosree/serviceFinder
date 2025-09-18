const express = require("express")
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.use(cors({
    origin: ""
}))

app.use("/", (req , res)=>{
    res.send("Hello im come back")
})

app.listen(PORT, ()=>{
    console.log(`server is listening at http://localhost:${PORT}`)
})