// connect to Mongo DB

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkingAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})