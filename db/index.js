module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/movietvsearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})