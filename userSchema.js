const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  distance: {
    type: String,
    required: [true, 'distance is required']
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;