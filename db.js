const mongoose = require('mongoose')
const {
  Schema
} = mongoose

mongoose.Promise = global.Promise

const database = mongoose.createConnection('mongodb://localhost:27017/mongodb101', {
  useMongoClient: true
}).then(db => {
    console.log('MongoDB Started!')
    return db
})

exports.database = database