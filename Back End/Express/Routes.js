const express=require('express');
var Routes=express.Router();
// var MenuRoute=require('./Controller/Menu.Route');
var AlergyRoute=require('./Controller/Alergy.Route');
var PatientRoute=require('./Controller/Patient.Route');

// Routes.use('/menu/',MenuRoute);
Routes.use('/alergy/',AlergyRoute);
Routes.use('/patient/',PatientRoute);
module.exports = Routes;