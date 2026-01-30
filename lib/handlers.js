exports.home = (req, res) => {
  res.render("home")

}

exports.about =  (req, res) => {
  res.render("about", { fortune : fortuneLib.getRandomFortune() })

}

// newsletter 
exports.newsletterSingUp = (req, res) => {
  res.render("newsletter-form", { csrf: "CSRF token goes here"})
}

exports.newsletterProcessingFetch = (req, res) => {

  const VALID_EMAIL_REGEX = new RegExp('^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~-]+@' + '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
    '(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$')

  const email = req.body.email  
  const name = req.body.name
  const password = req.body.password
  
  if(VALID_EMAIL_REGEX.test(email)) {

    req.session.flash = {
      type: "danger",
      intro: "Invalid Format",
      message: "Please introduce a valid email"
    }

  return res.json({redirect: "/newsletter"})
  }

  req.session.flash = {
    type: "success",
    intro: "Success",
    message:  `Thank You ${name.split(" ")[0]}`
    
  } 

  res.json({redirect: "/newsletter"})
  }


// vacation contest
exports.vacationContest = (req, res) => {
  res.render("vacation-contest", {year: 2026, month: "January", csrf: "Haven't learn it yet" })
}

// vacation contest data handling API

const fs = require("fs")
const pathUtils = require("path")

const dataDir = pathUtils.resolve(__dirname, "..", "data")
const vacationsPhotoDir = pathUtils.join(dataDir, "vacation-photos")

if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
if(!fs.existsSync(vacationsPhotoDir)) fs.mkdirSync(vacationsPhotoDir)

function saveContestEntry(contestName, email, year, month, photoPath) {

}

const { promisify } = require("util")
const mkdir = promisify(fs.mkdir)
const rename = promisify(fs.rename)

exports.vacationPhotoHandler = async (req, res) => {
  const photo = req.file 
  const dir = vacationsPhotoDir + "/" + Date.now()
  const path = dir + "/" + photo.originalname 

  await mkdir(dir)
  await rename(photo.path, path)
  
  saveContestEntry("vacation-contest", req.body.email, req.params.year, req.params.month, path)
  
  req.session.flash = {
    type: "success",
    intro: "Success",
    message:  `Thank You ${(req.body.name).split(" ")[0]}`
    
  } 

  res.json({redirect: "/vacation-contest"})


} 


// Error handling

exports.notFound = (req, res) => {
  res.status(404)
  res.render("404")
}

exports.internalError = (err, req, res, next) => {

  console.error(err);
  res.status(500)
  res.render("500")
}

