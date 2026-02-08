



// newsletter 

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

// vacation bussiness

const db = require("./../db")

exports.listVacations = async (req, res) => {

  const vacations = await db.getVacations()
  const context = {
    vacations: vacations.map( vacation => ({
      name: vacation.name,
      sku: vacation.sku,
      price: "$" + vacation.price,
      descripton: vacation.description,
      inSeason: vacation.inSeason
    }))
  }
  res.render("vacations", context)
}

exports.notifyMeWISform = (req, res) => { 
  res.render("notify-me-when-in-season", {sku: req.query.sku})
}
 exports.notifyMeWISformProcess = async (req, res) => { 

  const { email, sku } = req.body
  await db.addVacationInSeasonListener(email, sku) 
  res.redirect(303, "/vacations")
}


// Error handling
exports.internalError = (err, req, res, next) => {

  console.error(err);
  res.status(500)
  res.send("error")
}

