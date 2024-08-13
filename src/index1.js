import mongoose from "mongoose";
import { DATABASE_NAME } from "./constant.js";

const connectdb= async()=>{
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/ ${DATABASE_NAME}`)
console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
     catch(error){
        
        console.log("MONGODB connection failed",error)
        process.exit(1)


    }
}
export default connectdb