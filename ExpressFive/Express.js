const express=require('express');
const app = express();
const myRouter=require('./main');
const userRouter = require('./userRouter');
// _______________EXPRESS MIDDLEWARE______________
// ----------------application middleware------------
// let middlewareOne = (req,res,next)=>{
//  console.log("Hello Programmmer....")
//  next();
// }
// app.use(middlewareOne);

// app.get('/',(req,res)=>{
//    res.send("THIS IS HOME PAGE........!");
// })
// ---------------------------------------------------
// let middlewareOne = (req,res,next)=>{
//  console.log(req.originalUrl);
//  console.log(req.method);
//  next();
// }
// app.use(middlewareOne);

// app.get('/',(req,res)=>{
//    res.send("THIS IS HOME PAGE........!");
// })
// app.get('/Contact',(req,res)=>{
//    res.send("THIS IS Contact PAGE........!");
// })

// ----------------------Router Middleware-----------------
// const MidRouter = express.Router();

//  let middlewareOne = (req,res,next)=>{
//     console.log("Error.....");
//     throw new Error("This Is Error........")
//     next();
//    }
//    MidRouter.use(middlewareOne);

//    const ErrorHandleMiddleware=(error,req,res,next)=>{
//       console.log(error.message);
//       res.status(404).send("Server Error..!");
//      }
// MidRouter.use(ErrorHandleMiddleware);

// MidRouter.get('/about',(req,res)=>{
//    res.send("THIS IS ABOUT PAGE........!");
// })
// app.use('/address',MidRouter);

// app.get('/',(req,res)=>{
//    res.send("THIS IS HOME PAGE........!");
// })

// _________________________ROUTER__________________________

app.use('/student',myRouter);
app.use('/',userRouter);
// app.get('/',(req,res)=>{
//    res.send("THIS IS HOME PAGE........!");
// })
// app.get('/about',(req,res)=>{
//    res.send("THIS IS ABOUT PAGE........!");
// })


app.listen(5000,()=>{
    console.log("Server is running........")
})























