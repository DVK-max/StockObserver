var express=require('express');
const path=require('path');
const PORT=process.env.PORT || 5000

var app=express();

express().get('/',(req,res)=>{
    res.send("Function Working Proprerly.");
}).listen(PORT,()=>console.log("Listening On ${PORT}"))