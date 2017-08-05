const mongoose = require('mongoose')
const { database } = require('../db')

const {
  Schema
} = mongoose

const UserSchema = Schema({
  name: String
}, {
  timestamps: {}
})

exports.createUserModel = function (connection) {
  const UserModel = connection.model('User', UserSchema)
  return UserModel
}