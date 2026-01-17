const express = require("express")
const expressHandlebars = require("express-handlebars")
const handlers = require("./lib/handlers")

const port = process.env.PORT || 2323
const app = express()

app.engine("handlebars", expressHandlebars.engine({
  defaultLayout: "main",
}))

app.set("view engine", "handlebars")
app.use(express.static(__dirname + "/public"))

app.get("/", handlers.home)
app.get("/about", handlers.about)

app.use(handlers.notFound)
app.use(handlers.internalError)

app.listen(port, ()=> console.log("Listening on localhost:" + port))

