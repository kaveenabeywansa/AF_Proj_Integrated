var mongoose=require('../DBSchema/DBConfig');
var PatientViewSchema = mongoose.model('PatientView');
//var DummyFile = require('./DummyMenu');

var Controller=function () {
    this.insertPatientView=function (data) {
        return new Promise(function (resolve,reject) {
           
            var PatientView=new PatientViewSchema({
                
                injury: data.injury,
                visittype: data.visittype,
                iremark: data.iremark,
                Dateandtime: data.Dateandtime,
                doctor:data.doctor
               
            });
            console.log("hsjkfkjsdge");
            PatientView.save().then(function () {
               
                resolve({status:200,message:"PatientView inserted successfully !"});

            }).catch(function (err) {
                
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAllPatient=function (nic) {
        return new Promise(function (resolve,reject) {
            PatientViewSchema.find({nic:nic}).exec().then(function (data) {
                resolve({status:200,patientviewdata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
   
};
module.exports = new Controller();