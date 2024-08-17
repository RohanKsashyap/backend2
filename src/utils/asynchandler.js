const asynchandler= (requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err))
    }


}

export { asynchandler}



//another method

// const asynchandler= (fn)=> async (req,res,next)=>{

//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code||500).json({
//             success:false,
//         message:err.message
//         })

//     }

// }

export {asynchandler}