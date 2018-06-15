var mongoose=require('../DBSchema/DBConfig');
var TreatmentSchema = mongoose.model('Treatment');

var Controller=function () {
    this.insertTreatment=function (data) {
        return new Promise(function (resolve,reject) {
            var Treatment=new TreatmentSchema({
                nic:data.nic,
                tretmentDateandTime: data.TreatmentdateAndtime,//frontend
                treatment : data.Treatment,
                tremaks : data.Remark,
                active : data.active
            });
            Treatment.save().then(function () {
                resolve({status:200,message:" successfully !"});
            }).catch(function (err) {
                reject({status:500,message:err});
            })
        });
    }
    this.getAllTreatment=function (nic) {
        return new Promise(function (resolve,reject) {
            TreatmentSchema.find({nic:nic}).exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }



}

module.exports = new Controller();
