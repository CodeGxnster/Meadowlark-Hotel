const express = require("express")
const colors = require("colors")

const port = process.env.PORT || 2323

const app = express()

// custom 404 
app.get("/", (req, res)=> {
    res.type("text/plain")
    res.status(200)
    res.send("Frankelly's Meadowlark travel & Co.")
})

app.get("/about", (req, res) => {
  res.type("text/plain")
  res.status(200)
  res.send("Frankelly's Meadowlark about page")
})

app.use((req, res) => {
  res.type("text/plain")
  res.status(404)
  res.send("404 - Not found")
})


app.use((err, req, res, next) => {
  res.type("text/plain")
  res.status(500)
  res.send("Internal server Error")
})


app.listen(port, ()=> console.log("Listening on localhost:".blue + port))
