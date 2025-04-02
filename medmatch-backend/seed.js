const mongoose = require('mongoose');
const Medication = require('./models/Medication');
require('dotenv').config();

const medications = [
  {
    name: 'Lipitor',
    generic: ['Atorvastatin'],
    prices: [
      { pharmacy: 'GoodRx', price: 12.99, link: 'https://www.goodrx.com/lipitor' },
      { pharmacy: 'Blink Health', price: 10.49, link: 'https://www.blinkhealth.com/lipitor' }
    ]
  },
  {
    name: 'Zoloft',
    generic: ['Sertraline'],
    prices: [
      { pharmacy: 'GoodRx', price: 9.99, link: 'https://www.goodrx.com/zoloft' },
      { pharmacy: 'Blink Health', price: 8.99, link: 'https://www.blinkhealth.com/zoloft' }
    ]
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  await Medication.deleteMany();
  await Medication.insertMany(medications);
  console.log("Database seeded!");
  mongoose.disconnect();
});