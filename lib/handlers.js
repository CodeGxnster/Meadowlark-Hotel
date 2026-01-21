const fortuneLib = require("./fortune")

exports.home = (req, res) => res.render("home")

exports.about =  (req, res) => {
  res.render("about", { fortune : fortuneLib.getRandomFortune() })

}

// newsletter 
exports.newsletterSingUp = (req, res) => {
  res.render("newsletter-form", { csrf: "CSRF token goes here"})
}

exports.newsletterProcessingFetch = (req, res) => {
  console.log("CSRF token form hidden form field " + req.body._csrf)
  console.log("Name from visible form name " + req.body.name)
  console.log("Email from visible from email " + req.body.email)   
  res.send({result: "success"})
}




// exports.newsletterProcessing = (req, res) => {
//   console.log("Form from Query String: " + req.query.form)
//   console.log("CSRF token form hidden form field " + req.body._csrf)
//   console.log("Name from visible form name " + req.body.name)
//   console.log("Email from visible from email " + req.body.email)   
//   res.redirect(303 , "/newsletter/thank-you")
//
// }
//

exports.vacationContest = (req, res) => {
  res.render("vacation-contest", {year: 2026, month: "January", csrf: "Haven't learn it yet" })
}

exports.vacationPhotosFetch = (req, res) => {
  console.log("The fields are: " + req.body.name + "\n" + req.body.email) 
  console.log("The files are: " + req.file) 
  res.send({result: "success!!! Thank You"})  
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

