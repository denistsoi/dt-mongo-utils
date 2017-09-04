const mongoose = require('mongoose');
const schema = require('./testSchema');
const Model = mongoose.models.test || mongoose.model('test', schema, 'test');

exports = module.exports = Model;