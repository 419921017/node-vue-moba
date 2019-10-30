
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String
  }
})

const Cateogry = mongoose.model('Category', schema);

module.exports = Cateogry