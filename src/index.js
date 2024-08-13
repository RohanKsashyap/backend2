// import mongoose from "mongoose"
// import { DATABASE_NAME } from "./constant"
import dotenv from "dotenv"
dotenv.config({path:'./'
})
import connectdb from "./index1.js"

// import  express from "express"

// const app = express()

// (async ()=> {
//     try{
// mongoose.connect(` ${process.env.MONGODB_URI}/${DATABASE_NAME}`)
// app.on("error",(error)=>{
//     console.log('err',error)
//     throw error
// })
// app.listen(process.env.PORT,()=>{
//  console.log(`App is listening on port ${process.env.PORT}`)

// })
//     }
//     catch(error){
//         console.error("ERROR:",error)
//         throw error
//     }
    
// 
connectdb()

