import React from 'react';
import {Switch, Route} from 'react-router-dom';

import  ReloadOnBackButton from "./services/ReloadOnBackButton";

import {

    LandingPage, 
    MentorHome, 
    CompanyHome, 
    CandidateHome, 
    Login,
    SignUp,
    jobList,
    jobDescription,
    jobPosting,
    Events,
    EventDet,
    Course,
    CourseDetailsPage,
    Mentor,
    aboutus,
    candidatedet,
    mentordet,
    companydet,
    preferences,
    Internship,
    internshipdet
  } from './components/pages';


function App() {
  return (
    <div className="App">

        <Switch>
          
          <Route exact path='/' component={LandingPage}/>   {/* Requires Rework */}

          <Route path='/home/candidate' component={CandidateHome}/> {/* Requires Rework */}
          <Route path='/home/mentor' component={MentorHome}/> {/* Requires Rework */}
          <Route path='/home/company' component={CompanyHome}/> {/* Requires Rework */}

         
     
          <Route path="/login/:type" component={Login} />
          <Route path="/signup/:type" component={SignUp} />
     
          <Route path='/job/list' component={jobList}/>
          <Route path='/job/description/:jobId' component={jobDescription}/>
          <Route path='/job/post' component={jobPosting}/>
          
          <Route path='/candidate/prefer' component={preferences}/>

         <Route path='/event/list' component={Events}/>
         <Route path='/event/detail/:eventId' component={EventDet}/>

          <Route path='/course/list' component={Course}/>
          <Route path='/course/description/:courseId' component={CourseDetailsPage}/>

          <Route path='/mentor/find' component={Mentor}/>

          <Route path='/about' component={aboutus}/>

          <Route path='/candidate/details' component={candidatedet}/>
          <Route path='/mentor/details' component={mentordet}/>
          <Route path='/company/details' component={companydet}/>
     
          <Route path='/internship/list' component={Internship}/>
          <Route path='/internship/internshipdet' component={internshipdet}/>
        </Switch>

        <ReloadOnBackButton />
    </div>
  );
}

export default App;
