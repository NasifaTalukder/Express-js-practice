const express=require('express');
const myRouter=express.Router();

myRouter
     .route('/result')

      .get((req,res)=>{
    res.status(202).send("This Is result Page...!");
})
     .all((req,res)=>{
    res.status(202).send("This Is Student Page...!");
})

module.exports = myRouter;