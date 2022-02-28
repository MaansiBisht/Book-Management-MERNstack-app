const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let bookSchema = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
      type: Number
  },
  date : {
      type : Date
  }
}, {
    collection: 'books'
  })
module.exports = mongoose.model('Book', bookSchema)