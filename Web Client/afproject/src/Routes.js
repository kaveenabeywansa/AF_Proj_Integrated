import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Dhanushi
import Home from "./Dhanushi/components/Home";
import OverviewOfPatient from './Dhanushi/components/OverviewOfPatient';
import PatientRegistration from './Dhanushi/components/PatientRegistration';
import PrintCard from './Dhanushi/components/PrintCard';
import AddAlergies from './Kaveen/Components/AddAlergies';
import AllPatients from './Kaveen/Components/AllPatients';
import DocAccCreate from './Kaveen/Components/DoctorReg';
import EditPatient from './Kaveen/Components/EditPatient';
// Kaveen
import Login from './Kaveen/Components/Login';
import Logout from './Kaveen/Components/Logout';
import NurseAccCreate from './Kaveen/Components/NurseReg';
import AccCreate from './Kaveen/Components/Register.js';
// Viraj
import DocHome from './Viraj/Doctor/DocHome';
import Questionnaire from './Viraj/Doctor/Questionnaire';
import ViewQuestions from './Viraj/Doctor/ViewQuestions';
import AddToQueue from './Viraj/Nurse/AddToQueue';
import PatientDetails from './Viraj/Nurse/PatientDetails';
import PrintToken from './Viraj/Nurse/PrintToken';
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/register" exact component={AccCreate} />
                <Route path="/register/doctor" exact component={DocAccCreate} />
                <Route path="/register/nurse" exact component={NurseAccCreate} />

                <Route path="/nurse" exact component={Home} />
                <Route path="/nurse/PatientRegistration" exact component={PatientRegistration} />
                <Route path="/nurse/overviewofpatient" exact component={OverviewOfPatient} />
                <Route path="/nurse/printcard" exact component={PrintCard} />

                <Route path="/nurse/editpatient" exact component={EditPatient} />
                <Route path="/nurse/addalergies" exact component={AddAlergies} />
                <Route path="/nurse/allpatients" exact component={AllPatients} />

                <Route path="/doctor" exact component={DocHome} />
                <Route path="/doctor/questionnaire" exact component={Questionnaire} />
                <Route path="/doctor/viewquestions" exact component={ViewQuestions} />

                <Route path="/nurse/addtoqueue" exact component={AddToQueue} />
                <Route path="/nurse/patientdetails" exact component={PatientDetails} />
                <Route path="/nurse/printtoken" exact component={PrintToken} />
            </Switch>
        </BrowserRouter>
    )
}