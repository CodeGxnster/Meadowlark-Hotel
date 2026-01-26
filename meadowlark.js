const express = require("express")
const expressHandlebars = require("express-handlebars")
const expressSession = require("express-session")

const multer = require("multer")
const upload = multer({dest: __dirname + "/public/img"})

const handlers = require("./lib/handlers")

const port = process.env.PORT || 2323
const app = express()

const { credentials } = require("./config")

const flashMiddleware = require("./lib/middleware/flash.js")





// view engine conf 
app.engine("handlebars", expressHandlebars.engine({
  defaultLayout: "main",
}))

app.set("view engine", "handlebars")
app.use(express.static(__dirname + "/public"))

// session conf
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret
}))

// flash messages middleware
app.use(flashMiddleware)


// parsers middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// parsers middleware

app.get("/", handlers.home)
app.get("/about", handlers.about)

app.get("/newsletter", handlers.newsletterSingUp) 

app.post("/api/newsletter-signup", handlers.newsletterProcessingFetch)

app.get("/vacation-contest", handlers.vacationContest)

app.post("/contest/vacation-photo/:year/:month", upload.single("photo"), (req, res)=> {

handlers.vacationPhotosFetch(req, res) 
  
})


app.use(handlers.notFound)
app.use(handlers.internalError)

app.listen(port, ()=> console.log("Listening on localhost:" + port))

