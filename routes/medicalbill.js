const express = require('express');
const router = express.Router();
const data = require('../data');
const medicalBillsData = data.medicalbills;


router
  .route('/items')
  .get( async (req, res) => {
    try {
      const billsList = medicalBillsData.medicalbills();
      res.status(200).json(billsList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  })
  .post(async (req, res) => {
    medicalBillsData.addmedicalBill(req.body);
    res.status(200).json(medicalBillsData.medicalbills());
  })

module.exports = router;
