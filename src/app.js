// read our documentation folder 1.txt file to run 


const path = require('path');
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000

const staticpath = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)

app.use(express.static(staticpath))



app.get("/", (req , res) => {
res.render("index")
})

app.get("/about", (req , res) => {
res.render("about")
})

app.get("/weather", (req , res) => {
res.render("weather")
})

app.get("*", (req , res) => {
res.render("404error", {
    errorMsg:'opps! page not found'
})
})


app. listen(port,() =>{
    console.log("listening to port at 3000")
})










// const express = require('express')
// const path = require('path');
// const app = express()
// const port = 4000

// // console.log(path.join(__dirname, "../public"))

// const static_path = (path.join(__dirname, "../public"))
// app.use(express.static(static_path))



// app.get("", (req , res) => {
// res.send("hello from the express")
// })

// app.get("/about", (req , res) => {
// res.send("hello welcome to about page")
// })

// app.get("*", (req , res) => {
//     res.send("404 error page opps")
//     })



// app. listen(port,() =>{
//     console.log("listening to port at 4000")
// })
