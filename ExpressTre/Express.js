const express=require('express');
const cookieParser =require('cookie-parser');
const Register = require('./Register');

const app = express();
// const admin = express.Router();
// // app.use(cookieParser());
app.use(express.json());

// -----------REQUEST= PROPERTIES-------------
// admin.get('/dashboard',(req,res)=>{
//    console.log(req.baseUrl);
//    console.log(req.originalUrl);
//    console.log(req.path);
//    res.send("THIS iS DASHBOARD PAGE........!")
// })
// app.use('/admin',admin);

// app.get('/',(req,res)=>{
//    console.log(req.baseUrl);
//    console.log(req.originalUrl);
//    console.log(req.path);
//    console.log(req.hostname);
//    console.log(req.ip);
//     res.send("THIS iS ROOT PAGE........!")
// })
// ---------------PARAMS--------------
// admin.get('/dashboard',(req,res)=>{
   
//    res.send("THIS iS DASHBOARD PAGE........!")
// })
// app.use('/admin',admin);

// app.post('/student',(req,res)=>{
//    // console.log(req.params.id);
//    // console.log(req.protocol);
//    // console.log(req.query.search_query);
//    // console.log(req.cookies.name);
//    console.log(req.body);
//     res.send("THIS iS STUDENT PAGE........!")
// })
// -------------------APP--------------------
app.post('/student',Register);
app.listen(5000,()=>{
    console.log("Server is running........")
})