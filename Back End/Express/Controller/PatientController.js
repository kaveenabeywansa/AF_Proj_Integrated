var mongoose = require('../DBSchema/DBConfig');
var PatientSchema = mongoose.model('Patient');

var Controller = function () {
    this.addPatient = function (data) {
        return new Promise(function (resolve, reject) {
            var patient = new PatientSchema({
                Title: data.Title,
                Full_Name: data.Full_Name,
                other_name: data.other_name,
                civil_status: data.civil_status,
                gender: data.gender,
                DateOfBirth: data.DateOfBirth,
                nic: data.nic,
                citizenship: data.citizenship,
                Blood_Group: data.Blood_Group,
                preferred_language: data.preferred_language,
                Address: data.Address,
                phone: data.phone,
                contact_person_name: data.contact_person_name,
                contact_person_tel: data.contact_person_tel,
                Choose_file: data.Choose_file,
                Remarks: data.Remarks

            });
            patient.save().then(function () {
                resolve({ status: 200, message: "Patient Added Successfully..... !" });
            }).catch(function (err) {
                reject({ status: 500, message: "Error: " + err });
            })
        });
    }
    this.getAll = function () {
        return new Promise(function (resolve, reject) {
            PatientSchema.find().exec().then(function (data) {
                resolve({ status: 200, patientdata: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    }
    this.searchPatient = function (nic) {
        return new Promise(function (resolve, reject) {
            PatientSchema.find({ nic: nic }).exec().then(function (data) {
                resolve({ status: 200, patientSearch: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

    this.updatePatient = function (nic, body) {
        return new Promise(function (resolve, reject) {
            PatientSchema.update({ nic: nic }, body).then(function (data) {
                resolve({ status: 200, patientUpdated: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

};

module.exports = new Controller();