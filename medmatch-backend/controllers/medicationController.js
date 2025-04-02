const Medication = require('../models/Medication');

exports.getMedication = async (req, res) => {
  const name = req.params.name;
  try {
    const med = await Medication.findOne({ name: new RegExp(name, 'i') });
    if (!med) return res.status(404).json({ message: 'Medication not found' });
    res.json(med);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};