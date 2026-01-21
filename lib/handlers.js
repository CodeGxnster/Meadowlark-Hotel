const fortuneLib = require("./fortune")

exports.home = (req, res) => res.render("home")

exports.about =  (req, res) => {
  res.render("about", { fortune : fortuneLib.getRandomFortune() })

}

exports.newsletterSingUp = (req, res) => {
  res.render("newsletter-form", { csrf: "CSRF token goes here"})
}

exports.newsletterProcessing = (req, res) => {
  console.log("Form from Query String: " + req.query.form)
  console.log("CSRF token form hidden form field " + req.body._csrf)
  console.log("Name from visible form name " + req.body.name)
  console.log("Email from visible from email " + req.body.email)   
  res.redirect(303 , "/newsletter/thank-you")

}


exports.newsletterThankYou = (req, res) => {
  res.render("newsletterThankYou")
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

