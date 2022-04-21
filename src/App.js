
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home,Question} from "./pages/import"
import {Nav} from "./component/import"
function App() {
  return (
    <Router>
        <Nav/>
      <Switch>
        <Route path="/"exact><Home/></Route>
        <Route path="/question"><Question/></Route>
      </Switch>
    </Router>
  );
}

export default App;
