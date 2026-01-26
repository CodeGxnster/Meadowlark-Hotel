const fortuneLib = require("./fortune")

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

exports.vacationPhotosFetch = (req, res) => {

  req.session.flash = {
    type: "success",
    intro: "Success",
    message:  `Thank You`
    
  } 
  console.log(req.body.opinion) 
  res.json({redirect: "/vacation-contest"})
  }

 

/// Error handleing

exports.notFound = (req, res) => {
  res.status(404)
  res.render("404")
}

exports.internalError = (err, req, res, next) => {

  console.error(err);
  res.status(500)
  res.render("500")
}

