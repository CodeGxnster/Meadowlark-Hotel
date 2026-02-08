const mongoose = require("mongoose")

const vacationInSeasonListenerSchema = mongoose.Schema({
  email: String,
  skdu: [String],
})

const vacationInSeasonListenerModel = mongoose.model("vacationInSeasonListener", vacationInSeasonListenerSchema)
module.exports = vacationInSeasonListenerModel
