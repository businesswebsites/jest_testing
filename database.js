const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",

});

db.connect((err)=>{
    console.log("mysql connected")
})


const app = express();


//Create DB
app.get("/createdb", (req, res)=>{
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result)=>{
        res.send("Database created...");
    });
})

//Create Table
app.get("/createtable", (req, res)=>{
    let sql="CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (result)=>{
        console.log(result);
        res.send("Table created");
    }
    )
})

//insert post 1
app.get("/addpost1", (req, res)=>{
    let post = {
        title: "Post One", 
        body:"This is post number one"};
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (result)=>{
        console.log(result);
        res.send("Post 1 added...");
    })
})

app.get("/addpost2", (req, res)=>{
    let post = {
        title: "Post Two", 
        body:"This is post number two"};
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (result)=>{
        console.log(result);
        res.send("Post 2 added...");
    })
})

//select posts
app.get("/getposts", (req, res)=>{
    let sql = "SELECT * FROM posts";
    let query = db.query(sql, (result)=>{
        console.log(result);
        res.send(result);
    })
})

app.listen("3222", ()=>{
    console.log("Server started on port 3222");
})

