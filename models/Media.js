const { model, Schema } = require('mongoose')

const Media = new Schema({
  title: {
    type: String,
  },
  year: {
    type: String,
  },
  imdbID: {
    type: String,
  },
  type: {
    type: String,
  },
  poster: {
    type: String,
  }
}, { timestamps: true })

module.exports = model('Media', Media)