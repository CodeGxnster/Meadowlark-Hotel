const express = require("express")
const expressHandlebars = require("express-handlebars")
const expressSession = require("express-session")


// data base
require("./db")


// Multipart form data
const multer = require("multer")
const upload = multer({dest: __dirname + "/public/img"})


// logs 
const morgan = require("morgan")
const fileSys = require("fs")

const handlers = require("./lib/handlers")

const port = process.env.PORT || 2323
const app = express()

const { credentials } = require("./config")

const flashMiddleware = require("./lib/middleware/flash.js")

switch(app.get('env')) {
  case "development":
    app.use(morgan('dev'))
    break
  case "production":
    const stream = fileSys.createWriteStream(__dirname + "/.access.log", {flags: "a"}) 
    app.use(morgan("combined", { stream }))
    break
}


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

app.post("/api/vacation-photo/:year/:month", upload.single("photo"), (req, res)=> {

  handlers.vacationPhotoHandler(req, res) 
})

app.get("/vacations", handlers.listVacations)

app.get("/notify-me-when-in-season", handlers.notifyMeWISform)
app.post("/notify-me-when-in-season", handlers.notifyMeWISformProcess)

app.use(handlers.notFound)
app.use(handlers.internalError)

app.listen(port, ()=> console.log(`Listening on enviroment ${app.get('env')} localhost:` + port))

