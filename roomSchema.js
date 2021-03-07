const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room: {
    type: String,
    required: [true, 'Room is required']
  },
  name1: {
    type: String
  },
  name2: {
      type: String
  },
  name3: {
    type: String 
},
name4: {
    type: String
},
name5: {
    type: String, 
}
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;