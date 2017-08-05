const { database } = require('./db')
database.then(connection => {

  const UserModel = require('./models/user').createUserModel(connection)

  const someUser = new UserModel({
    name: 'Jeng'
  });

  const someUser2 = new UserModel({
    name: 'Fern'
  });

  const someUser3 = new UserModel({
    name: 'Tee'
  });

  const someUse4 = new UserModel({
    name: 'Dome'
  });


  UserModel.collection.insert([someUser2,someUser3, someUse4]).then(userInDb => {
    //console.log('userInDb', userInDb)
    
  })

  someUser.save().then(userInDb => {
    console.log('userInDb', userInDb)
    return userInDb.remove()
  }).then((responseFromRemove) => {
    console.log('responseFromRemove', responseFromRemove)
    return UserModel.find({})
  }).then(users => {
    console.log('users', users)
  })

  //UserModel.remove().exec()

})