import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './components/Routes'
import Homepage from './components/Homepage/'


const App = () =>  {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Homepage}/>
        {/* <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/cities" component={CitiesList}/>
        <Route exact path="/cities/:cityId/houses" component={HouseList}/>
        <Route exact path="/meetups" component={MeetUpApiCall}/>
        <Route exact path="/hosting" component={HouseForm}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/housepending" component={HomePending}/> */}
      </Switch>
    </Router>
  </div>
  );
}

export default App;
