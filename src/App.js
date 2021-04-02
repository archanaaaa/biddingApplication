import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ActionPlan from './components/ActionPlan';
import BidList from './components/BidList';
import CreateResponse from './components/CreateResponse';
import Review from './components/Review'
import PieChartSample from './components/charts/PieChart';
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import Signout from './components/Signout';
import SignUp from './components/SignUp';
import ErrorPage from './errorResponse/ErrorPage';
import DraftResponse from './components/DraftResponse/DraftResponse'
import EffortDocuments from './components/Upload/EffortDocuments'
import SupportingDocument from './components/MasterData/SupportingDocument'
import EditDropDownValues from './components/MasterData/EditDropdownValues'
import DownloadTemplates from './components/Templates/DownloadTemplates'
import UpdateOutcomes from './components/Submit/UpdateOutcomes'
import MasterData from './components/MasterData/MasterData';
import AddActionPlan from './components/AddActionPlan';
import AssignTeamMember from './components/AssignTeamMember';
import Questionnaire from './components/Questionnaire'
import AddQuestionnaire from './components/AddQuestionnaire';
import AddReview from './components/AddReview';
import CreateReview from './components/CreateReview';
import SubmissionDetails from './components/SubmissionDetails';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/login"]} component={Login} exact />
        <Route path="/signUp" component={SignUp} exact />
        <Route path="/Error" component={ErrorPage} exact />
        <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/bids" component={BidList} />
        <PrivateRoute path="/actionPlan" component={ActionPlan} />
        <PrivateRoute path="/addActionPlan" component={AddActionPlan} />
        <PrivateRoute path="/createResponse" component={CreateResponse} />
        <PrivateRoute path="/review" component={Review} />
        <PrivateRoute path="/addReview" component={AddReview} />
        <PrivateRoute path="/createReview" component={CreateReview} />
        <PrivateRoute path="/pieChart" component={PieChartSample} />
        <PrivateRoute path="/draftResponse" component={DraftResponse} />
        <PrivateRoute path="/effortDocuments" component={EffortDocuments} />
        <PrivateRoute path="/supportingDocument" component={SupportingDocument} />
        <PrivateRoute path="/downloadTemplates" component={DownloadTemplates} />
        <PrivateRoute path="/editDropDownValues" component={EditDropDownValues} />
        <PrivateRoute path="/updateOutcomes" component={UpdateOutcomes} />
        <PrivateRoute path="/masterData" component={MasterData} />
        <PrivateRoute path="/submissionDetails" component={SubmissionDetails} />
        <PrivateRoute path="/assignTeamMembers" component={AssignTeamMember} />
        <PrivateRoute path="/questionnaire" component={Questionnaire} />
        <PrivateRoute path="/addQuestionnaire" component={AddQuestionnaire} />
        <PrivateRoute path="/signout" component={Signout} />

        {/* <Route path="" component={SideBar} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
