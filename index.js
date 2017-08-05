const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.createConnection('mongodb://localhost/mongodb101', {
  useMongoClient: true,
  /* other options */
}).then(db => {
  console.log(db)
  db.on('error', () => console.error('connection error:'));
  db.once('open', () => {
    console.log('MongoDB Started!')

    const UserSchema = mongoose.Schema({
      name: String
    })

    const User = mongoose.model('User', UserSchema)

    const someUser = new User({
      name: 'Jeng'
    });

    User.find((a, b) => {
      console.log(a, b)
    })
    someUser.save((err, cb) => {
      if (err) return console.error(err)
      console.log(cb)
    })
  })

})