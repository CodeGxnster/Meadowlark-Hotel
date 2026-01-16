const express = require("express")
const colors = require("colors")
const expressHandlebars = require("express-handlebars")

const port = process.env.PORT || 2323
const app = express()
//
// app.get("/", (req, res)=> {
//     res.type("text/plain")
//     res.send("Frankelly's Meadowlark travel & Co.")
// })
//
// app.get("/about", (req, res) => {
//   res.type("text/plain")
//   res.send("Frankelly's Meadowlark about page")
// })
//
// app.use((req, res) => {
//   res.type("text/plain")
//   res.status(404)
//   res.send("404 - Not found")
// })
//
//
// app.use((err, req, res, next) => {
//   res.type("text/plain")
//   res.status(500)
//   res.send("Internal server Error")
// })
//


// using handle bars
const fortune = ["Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe","Knowing your own darkness is the best method for dealing with the darknesses of other people. - Carl Jung", "The fear of death is more to be feared, than death itself. - Publilius Syrus","Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.  - Nikola Tesla","There is only one thing that makes a dream impossible to achieve: the fear of failure. - Paulo Coelho"]



app.engine("handlebars", expressHandlebars.engine({
  defaultLayout: "main",
}))

app.set("view engine", "handlebars")

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => res.render("home"))
app.get("/about", (req, res) => {
  const randomFortune = fortune[Math.floor(Math.random() * fortune.length)]
  res.render("about", {fortune: randomFortune})

})

app.use((req, res) => {
  res.status(404)
  res.render("404")
})

app.use((err, req, res, next) => {

  console.error(err);
  res.status(500)
  res.render("500")
})

app.listen(port, ()=> console.log("Listening on localhost:".blue + port))

