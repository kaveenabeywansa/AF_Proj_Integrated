var express = require('express');
var router = express.Router();
var Controller = require('./TreatmentController');

router.post('/', function (req, res) {
   // if (req.headers.authorization === "1234") {
        Controller.insertTreatment(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
   // } else {
      //  res.status("401").send({ message: "You are not authorized !" });
   // }
});
router.get('/:nic', function (req, res) {
   // if (req.headers.authorization === "1234") {
        Controller.getAllTreatment(req.params.nic).then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
  //  } else {
      //  res.status("401").send({ message: "You are not authorized !" });
  //  }
});

module.exports = router;