var express = require('express');
var router = express.Router();
var Controller = require('./CustController');

router.post('/', function (req, res) {
   // if (req.headers.authorization === "1234") {
        Controller.insertExamination(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
   // } else {
      //  res.status("401").send({ message: "You are not authorized !" });
   // }
});
router.get('/', function (req, res) {
   // if (req.headers.authorization === "1234") {
        Controller.getAllExamination().then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
  //  } else {
      //  res.status("401").send({ message: "You are not authorized !" });
  //  }
});
/*router.get('/:id', function (req, res) {
    if (req.headers.authorization === "1234") {
        Controller.getCust(req.params.id).then(function (data) {
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
        Controller.updateCust(req.params.id, req.body).then(function (data) {
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
        Controller.deleteCust(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    } else {
        res.status("401").send({ message: "You are not authorized !" });
    }
});*/
module.exports = router;