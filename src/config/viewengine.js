import express from "express";

//es6
let configViewEngine = (app) =>{
    //arrow function
    //cau hinh cho app su dung static anh trong folder public
    app.use(express.static("./src/public"));
    //cau hinh view
    app.set("view engine","ejs");
    app.set("views","./src/views");
}

module.exports =configViewEngine;