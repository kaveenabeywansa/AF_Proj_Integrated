var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alergy = new Schema({
    nic: String,
    alergy: String,
    status: String,
    remark: String
});

const Attachments = new Schema({
    nic: String,
    file: String
});

<<<<<<< HEAD
const PatientSchema = new Schema({
    Title: String,
    Full_Name: String,
    other_name: String,
    civil_status: String,
    gender: String,
    DateOfBirth: String,
    nic: String,
    citizenship: String,
    Blood_Group: String,
    preferred_language: String,
    Address: String,
    phone: String,
    contact_person_name: String,
    contact_person_tel: String,
    Choose_file: String,
    Remarks: String
=======
const PatientSchema=new Schema({
    Title:String,
    Full_Name:String,
    other_name:String,
    civil_status:String,
    gender:String,
    DateOfBirth:Date,
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
>>>>>>> 0995048c58564c04817c7ea754d816e3a56a3cce

});

const OnlineDoctorSchema = new Schema({
    name: {
        type: String,
        require: true
    }
});

const QuestionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    relateTo: {
        type: String,
        require: true
    },
    remarks: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    }
});

const QueueSchema = new Schema({
    doctor: {
        type: String,
        require: true
    },
    patient: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    assignedBy: {
        type: String,
        require: true
    },
    remarks: {
        type: String,
        require: true
    }
});

const PatientViewSchema = new Schema({
    injury: {
        type: String,
        require: true
    },
    visittype: {
        type: String,
        require: true
    },
    iremark: {
        type: String,
        require: true
    },
    Dateandtime: {
        type: String,
        require: true
    },
    doctor: {
        type: String,
        require: true,
    }
});

const Examinationchema = new Schema({
    examinationDateandTime: {
        type: String,
        require: true
    },
    hight: {
        type: Number,
        require: true
    },
    wight: {
        type: Number,
        require: true
    },
    BMI: {
        type: Number,
        require: true
    },
    temp: {
        type: Number,
        require: true
    },
    bloodpreasure: {
        type: Number,
        require: true,
    }
});
const TreatmentSchema = new Schema({
    tretmentDateandTime: {
        type: String,
        require: true
    },
    treatment: {
        type: String,
        require: true
    },
    tremaks: {
        type: String,
        require: true
    },
    active: {
        type: String,
        require: true,
    }

});
const InjectionSchema = new Schema({
    injectionDateandTime: {
        type: String,
        require: true
    },
    injection: {
        type: String,
        require: true
    },
    iremaks: {
        type: String,
        require: true,
    }


});

mongoose.model('PatientView', PatientViewSchema);//menu
mongoose.model('Examination', Examinationchema);//customer
mongoose.model('Treatment', TreatmentSchema);//customer
mongoose.model('Injection', InjectionSchema);//customer
mongoose.model('Queue', QueueSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Onlinedoc', OnlineDoctorSchema);
mongoose.model('Alergy', Alergy);
mongoose.model('Attachments', Attachments);
mongoose.model('Patient', PatientSchema);
mongoose.connect('mongodb://127.0.0.1:27017/afproject', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;