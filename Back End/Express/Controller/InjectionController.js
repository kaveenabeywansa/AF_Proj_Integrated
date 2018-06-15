var mongoose=require('../DBSchema/DBConfig');
var InjectionSchema = mongoose.model('Injection');

var Controller=function () {
    this.insertInjection=function (data) {
        return new Promise(function (resolve,reject) {
            var Injection=new InjectionSchema({

                injectionDateandTime: data.injectionDateandTime,//fronend
                injection : data.injection,
                iremaks : data.iremaks
            });

            Injection.save().then(function () {
                resolve({status:200,message:" successfully !"});
            }).catch(function (err) {
                reject({status:500,message:err});
            })
        });
    }
    this.getAllInjection=function (nic) {
        return new Promise(function (resolve,reject) {
            InjectionSchema.find({nic:nic}).exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }



}
module.exports = new Controller();