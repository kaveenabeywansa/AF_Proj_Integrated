const express=require('express');
var Routes=express.Router();

var AlergyRoute=require('./Controller/Alergy.Route');
var PatientRoute=require('./Controller/Patient.Route');
const DoctorRoute=require('./Controller/Doctor.Route');
const QuestionRoute=require('./Controller/Question.route');
const QueueRoute=require('./Controller/Queue.Route');

Routes.use('/alergy/',AlergyRoute);
Routes.use('/patient/',PatientRoute);
Routes.use('/doctor/',DoctorRoute);
Routes.use('/question/',QuestionRoute);
Routes.use('/queue/',QueueRoute);
module.exports = Routes;