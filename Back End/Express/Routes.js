const express=require('express');
var Routes=express.Router();

var AlergyRoute=require('./Controller/Alergy.Route');
var PatientRoute=require('./Controller/Patient.Route');
const DoctorRoute=require('./Controller/Doctor.Route');
const QuestionRoute=require('./Controller/Question.route');
const QueueRoute=require('./Controller/Queue.Route');
var PartientRoute=require('./Controller/View.Route');
var ExaminationRoute=require('./Controller/Cust.Route');
var InjectionRoute=require('./Controller/Injection.Route');
var TreatmentRoute=require('./Controller/Treatment.Route');

Routes.use('/alergy/',AlergyRoute);
Routes.use('/patient/',PatientRoute);
Routes.use('/doctor/',DoctorRoute);
Routes.use('/question/',QuestionRoute);
Routes.use('/queue/',QueueRoute);
Routes.use('/view/',PartientRoute);
Routes.use('/examination/',ExaminationRoute);
Routes.use('/injection/',InjectionRoute);
Routes.use('/treatment/',TreatmentRoute);
module.exports = Routes;