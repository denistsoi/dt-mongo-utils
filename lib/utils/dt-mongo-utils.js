const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

let db;

const mongoose = require('mongoose');

mongoose.Promise = Promise;

const connect = async () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl, { useMongoClient: true }, (err, database) => {
      if (err) {
        reject(err)
        throw new Error('err', err)
      }
      db = database;
      resolve(db)
    })
  })
}


exports = module.exports = {
  connect
}