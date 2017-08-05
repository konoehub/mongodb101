const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodb101')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB Started!')
})

const kittySchema = mongoose.Schema({
  name: String
})

const Kitten = mongoose.model('Kitten', kittySchema)

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'