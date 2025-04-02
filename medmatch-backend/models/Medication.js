const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  name: String,
  generic: [String],
  prices: [{
    pharmacy: String,
    price: Number,
    link: String
  }]
});

module.exports = mongoose.model('Medication', MedicationSchema);