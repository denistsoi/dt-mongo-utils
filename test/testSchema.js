const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: {
    type: String,
  }
});

exports = module.exports = schema;