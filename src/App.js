
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home,Question} from "./pages/import"
import {Nav} from "./component/import"
import QuestionBox from "./component/question";
import Name from './pages/name';
import Topper from './pages/topper';

function App() {
  return (
  
    <Router>
        <Nav/>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/question"><Question/></Route>
        <Route path="/question:pg"><QuestionBox/></Route>
        <Route path="/name"><Name/></Route>
        <Route path="/topper"><Topper/></Route>
      </Switch>
    </Router>

  );
}

export default App;
