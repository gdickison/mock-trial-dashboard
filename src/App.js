import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';
import Dashboard from './components/Dashboard';

const stateLogo = "images/ILF-blue-horizontal.png";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/team_dashboard" exact>
          <Dashboard type="team" headerImage={stateLogo} />
        </Route>
        <Route path="/judge_dashboard" exact>
          <Dashboard type="judge" headerImage={stateLogo} />
        </Route>
        <Redirect to="/"/>
        <Route path="/*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
