var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alergy = new Schema({
    nic:String,
    alergy:String,
    status:String,
    remark:String
});

const Attachments = new Schema({
    nic:String,
    file:String
});

const PatientSchema=new Schema({
    Title:String,
    Full_Name:String,
    other_name:String,
    civil_status:String,
    gender:String,
    DateOfBirth:String,
    nic:String,
    citizenship:String,
    Blood_Group:String,
    preferred_language:String,
    Address:String,
    phone:String,
    contact_person_name:String,
    contact_person_tel:String,
    Choose_file:String,
    Remarks:String

});

mongoose.model('Alergy', Alergy);
mongoose.model('Attachments', Attachments);
mongoose.model('Patient',PatientSchema);
mongoose.connect('mongodb://127.0.0.1:27017/afproject', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;