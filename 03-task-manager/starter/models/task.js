const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Must enter name'],
    trim: true,
    maxlength:[20,'Too long']
  }, 
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task',TaskSchema)