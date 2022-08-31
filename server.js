// REQUIRE DEPENDENCIES

const express = require("express");
const app = express();
const port = 3000;

// DATABASE

const budget = require("./models/budget")

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))



// ROUTES

// Index

app.get("/budgets" , (req, res)=>{
    res.render("index.ejs")
})

// New

app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs")
})

// Delete

// Update

// Create

// Edit

// Show

app.get("/budgets/:index" , (req, res)=>{
    res.send("the show route works")
})


// LISTENER

app.listen(port, ()=>{
    console.log(`Let's make some money on port ${port}`)
    // console.log(budget)
})
