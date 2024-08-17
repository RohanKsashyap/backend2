// import mongoose from "mongoose"
// import { DATABASE_NAME } from "./constant"
import dotenv from "dotenv"
dotenv.config({path:'./'
})
import connectdb from "./db/index1.js"
import { app } from "./app.js"

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
.then(()=>{

    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER IS RUNNING AT ${process.env.PORT}`)
    })
    // console.log('app is running')
})
.catch((error)=>{
    console.log("app has error",error)

})

