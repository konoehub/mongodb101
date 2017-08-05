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

  someUser.save((err, userInDb) => {
    if (err) return console.error(err)
    console.log('userInDb', userInDb)

    User.find((err, users) => {
      if (err) return console.error(err)
      console.log('users', users)

      User.remove().exec()
    })
  })

})