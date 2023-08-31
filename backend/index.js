import express from "express"
const app = express()
import mongoose from "mongoose"
import 'dotenv/config'

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successfull"))
    .catch((err) => {
        console.log(err)
    })

    app.get("/api/test", ()=>{
        console.log("test is successful")
    })

app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running");
})