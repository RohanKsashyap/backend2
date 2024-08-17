import express from "express"
import cors from "cors" 
import cookieParser from "cookie-parser"
import { config } from "dotenv"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN ,   // it allows rquest only from this origin to talk with the backend
    credentials:true
})) 
// for config of cookie parser

app.use(express.json(
    {limit:"16kb"  // takes data from json form


}))

app.use(express.urlencoded({extended:true,limit:"16kb"})) // takes data from url and encode it automatically
app.use(express.static("public")) // stores public assets LIke images ,files uploaded, favicon etc.
app.use(express.cookieParser())

export{app}