const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  feature: {
    type: [Number],
    required: true,
  }
})

pinSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Pin = mongoose.model('Pin', pinSchema)
module.exports = Pin