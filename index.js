const mongoose = require('mongoose')
const {
  Schema
} = mongoose

mongoose.Promise = global.Promise
mongoose.createConnection('mongodb://localhost:27017/mongodb101', {
  useMongoClient: true
}).then(db => {

  console.log('MongoDB Started!')

  const UserSchema = Schema({
    name: String
  }, {
    timestamps: {}
  })
  const User = db.model('User', UserSchema)

  const someUser = new User({
    name: 'Jeng'
  });

  someUser.save().then(userInDb => {
    console.log('userInDb', userInDb)
    return userInDb.remove()
  }).then((responseFromRemove) => {
    console.log('responseFromRemove', responseFromRemove)
    return User.find({})
  }).then(users => {
    console.log('users', users)
  })

})