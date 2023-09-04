const express=require('express');
const userRouter=express.Router();

// const Login = (req,res,next)=>{
//     console.log("SuccessFully LogedIn..")
//     next();
// }
// userRouter.all('*', Login);
userRouter.param('id',(req,res,next,id)=>{
    console.log("Id Is:",id);
    if(id=="1"){
        console.log("user1")
    }else if(id=="2"){
        console.log("user2")
    }else if(id=="3"){
        console.log("user3")
    }else{
        console.log("user not Found")
    }
    next()

})
userRouter.get('/user/:id',(req,res)=>{
    res.send("User Id Page........!");
 })
 userRouter.get('/about',(req,res)=>{
    res.send("THIS IS ABOUT PAGE........!");
 })
module.exports = userRouter;