const fortuneLib = require("./fortune")

exports.home = (req, res) => res.render("home")

exports.about =  (req, res) => {
  res.render("about", { fortune : fortuneLib.getRandomFortune() })

}

exports.notFound = (req, res) => {
  res.status(404)
  res.render("404")
}

exports.internalError = (err, req, res, next) => {

  console.error(err);
  res.status(500)
  res.render("500")
}

