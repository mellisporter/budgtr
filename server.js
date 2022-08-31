// REQUIRE DEPENDENCIES

const express = require("express");
const app = express();
const port = 3000;

// DATABASE

const budget = require("./models/budget")

// only need this since i made a public folder vs. using cdn
app.use(express.static('public'))

// this is our body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



// ROUTES

// Index

app.get("/budgets" , (req, res)=>{
    res.render("index.ejs" , {
        allBudget: budget,
        // budget needs to be redeclared so index.ejs can access it
    })
})

// New

app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs")
})

// Delete

// Update

// Create
// need to use post method to add the new data to /budgets
app.post("/budgets" , function (req, res){
budget.push(req.body)
// res.send("data received")
//  console.log(req.body)
res.redirect("/budgets")
})

// Edit

// Show

app.get("/budgets/:index" , (req, res)=>{
    res.render("show.ejs", {
        budgetItem: budget[req.params.index]
    })
})


// LISTENER

app.listen(port, ()=>{
    console.log(`Let's make some money on port ${port}`)
    // console.log(budget)
})

// <!-- CODE GRAVE YARD FOR INNOVATION SECTION -->

// <!-- adding bankAccount variable to collect the total number of dollars in account -->
// <!-- using squids and flounders since we are typing js in an ejs file -->
// <!-- first lets declare the variable -->
// <!-- my mind immediately went to the reduce array iterator, so i will revisit that lesson -->
// <!-- before I can reduce though I need to filter just the cost of the items. s/o to project one for forcing me to use the find method! -->

// let dollars = budget.find(function (amount){
//     return amount.amount;
// })

// lol jk find won't work
// gunna try filter
// trying to get the amounts of each item dynamically and then reducing the new array...
// find and filter couldn't work, going to make a new array with a loop
// after playing around, i found this variable needs to be a blank array outside the for loop
// let dollars = []

// for (let i = 0; i < budget.length; i ++){
//     dollars.push(budget[i].amount) // pushes all amounts to a new array
//     console.log(dollars) // used this for debug, it works
//     // able to console log all dollar amount
//     // let sum = dollars.reduce(function (acc, num){
//     //     return acc + num;
//     // }, 0)
// }

// console.log(dollars) // dollars array now has all values and should be dynamic
// // NOW let's try to reduce it
// let bankAccount = dollars.reduce(function (acc, num){
//     return acc + num;
// }, 0)

// console.log(bankAccount)
// IT WORKS!! Reduces correctly
// just need to figute out where to put it to get it to load on the webpage
// let bankAccount = 

// my method was working in console.log but not working in my actual web page
//moved everything above to index.ejs and was still stuck
// went to TA office hours and saw my way was more complicated then needed
// was on the right track , but was able to simplify it.