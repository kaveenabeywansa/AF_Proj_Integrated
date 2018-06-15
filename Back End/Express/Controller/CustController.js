var mongoose=require('../DBSchema/DBConfig');
var ExaminationSchema = mongoose.model('Examination');

var Controller=function () {
    this.insertExamination=function (data) {
        return new Promise(function (resolve,reject) {
            console.log("jdsfjklhsdjk");
            var Examination=new ExaminationSchema({
                examinationDateandTime: data.ExaminationDataTime,
                hight : data.hight,
                wight : data.wight,
                BMI : data.BMI,
                temp : data.temp,
                bloodpreasure: data.bloodpreasure
            });
            console.log("jdsfjklhsdjk");

            Examination.save().then(function () {
                resolve({status:200,message:" successfully !"});
            }).catch(function (err) {
                reject({status:500,message:err});
            })
        });
    }
    this.getAllExamination=function () {
        return new Promise(function (resolve,reject) {
            ExaminationSchema.find().exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    /*this.getCust=function(nic){
        return new Promise(function (resolve,reject) {
            CustSchema.find({nic:nic}).exec().then(function (data) {
                resolve({status:200,menuSearch:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
    this.updateCust=function (phone,body) {
        return new Promise(function (resolve,reject) {
            CustSchema.update({phone:phone},body).then(function (data) {
                resolve({status:200,menuUpdated:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found"});
            })
        })
    }
    this.deleteCust=function (phone) {
        return new Promise(function (resolve,reject) {
            CustSchema.remove({phone:phone}).then(function (data) {
                resolve({status:200,message:"Successfully Deleted !"});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }*/
};
module.exports = new Controller();