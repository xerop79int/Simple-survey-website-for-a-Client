import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


import App from './App';
import PreIntverNotice from './preIntverNotice';
import CandidateForm from './candidateForm';
import InterviewCoomplete from './InterviewCoomplete';
import InterviewVideo from './InterviewVideo';
import VideoRecorders from './videoRecorder';
import Applicants from './Applicants';
import Dashboard from './Dashboard';
import Settings from './Settings';
import InterviewQuestion1 from './InterviewVideo 1';
import InterviewQuestion2 from './InterviewVideo 2';
import InterviewQuestion3 from './InterviewVideo 3';
import InterviewQuestion4 from './InterviewVideo 4';
import InterviewQuestion5 from './InterviewVideo 5';
import InterviewQuestion6 from './InterviewVideo 6';
import InterviewQuestion7 from './InterviewVideo 7';
import InterviewQuestion8 from './InterviewVideo 8';
import { InterviewCombined } from './InterviewCombined';
import reportWebVitals from './reportWebVitals';
import { Login } from './Auth/Login';
import { Signup } from './Auth/Signup';
import AdminRoute from './AdminRoute';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/preIntvernotice" component={PreIntverNotice} />
      <Route exact path="/candidateform" component={CandidateForm} />
      <Route exact path="/interviewcoomplete" component={InterviewCoomplete} />
      <Route exact path="/interviewvideo" component={InterviewVideo} />
      <Route exact path="/video" component={VideoRecorders} />
      <AdminRoute exact path="/applicants" component={Applicants} />
      <AdminRoute exact path="/dashboard" component={Dashboard} />
      <AdminRoute exact path="/settings" component={Settings} />
      <Route exact path="/interview" component={InterviewCombined} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* <Route exact path="/interview-question-1" component={InterviewQuestion1} />
      <Route exact path="/interview-question-2" component={InterviewQuestion2} />
      <Route exact path="/interview-question-3" component={InterviewQuestion3} />
      <Route exact path="/interview-question-4" component={InterviewQuestion4} />
      <Route exact path="/interview-question-5" component={InterviewQuestion5} />
      <Route exact path="/interview-question-6" component={InterviewQuestion6} />
      <Route exact path="/interview-question-7" component={InterviewQuestion7} />
      <Route exact path="/interview-question-8" component={InterviewQuestion8} /> */}
      <Route exact path="/reportWebvitals" component={reportWebVitals} />
    </Switch>
  </BrowserRouter>
);
