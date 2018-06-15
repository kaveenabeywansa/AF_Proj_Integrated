var express = require('express');
var router = express.Router();
var Controller = require('./ViewController');

router.post('/', function (req, res) {
   // if (req.headers.authorization === "1234") {
     
        Controller.insertPatientView(req.body).then(function (data) {

            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
   // } else {
     //   res.status("401").send({ message: "You are not authorized !" });
   // }
});
router.get('/', function (req, res) {
    //if (req.headers.authorization === "1234") {
        Controller.getAllPatient().then(function (data) {
            res.status(data.status).send({ data: data.patientviewdata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
  //  } else {
      //  res.status("401").send({ message: "You are not authorized !" });
   // }
});
/*router.get('/dummyData', function (req, res) {
    if (req.headers.authorization === "1234") {
        Controller.getDummyData().then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
    } else {
        res.status("401").send({ message: "You are not authorized !" });
    }
});
router.get('/:id', function (req, res) {
    if (req.headers.authorization === "1234") {
        Controller.getMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.menuSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    } else {
        res.status("401").send({ message: "You are not authorized !" });
    }
});
router.put('/:id', function (req, res) {
    if (req.headers.authorization === "1234") {
        Controller.updateMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.menuUpdated });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    } else {
        res.status("401").send({ message: "You are not authorized !" });
    }
});
router.delete('/:id', function (req, res) {
    if (req.headers.authorization === "1234") {
        Controller.deleteMenu(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    } else {
        res.status("401").send({ message: "You are not authorized !" });
    }
});*/
module.exports = router;