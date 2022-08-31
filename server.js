// REQUIRE DEPENDENCIES

const express = require("express");
const app = express();
const port = 3000;

// DATABASE

const budget = require("./models/budget")

// ROUTES

// Index

app.get("/budgets" , (req, res)=>{
    res.send("the index route works")
})

// New

app.get("/budgets/new", (req, res)=>{
    res.send("the new route works")
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
