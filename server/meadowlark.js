const express = require("express")

// data base
require("./db")


// Multipart form data
const multer = require("multer")
const upload = multer({dest: __dirname + "/public/img"})


// logs 
const morgan = require("morgan")
const fileSys = require("fs")
const pathUtils = require("path")

const handlers = require("./lib/handlers")
const { warn } = require("console")

const port = process.env.PORT || 2323
const app = express()



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

// app.use(express.static(pathUtils.join(__dirname, '../client/build')))




// parsers middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/api/vacations", handlers.listVacations)

app.post("/api/newsletter-signup", handlers.newsletterProcessingFetch)


app.post("/api/vacation-photo/:year/:month", upload.single("photo"), (req, res)=> {

  handlers.vacationPhotoHandler(req, res) 
})

app.post("/notify-me-when-in-season", handlers.notifyMeWISformProcess)


app.listen(port, ()=> console.log(`Listening on enviroment ${app.get('env')} localhost:` + port))

