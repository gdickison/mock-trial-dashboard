import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';
import Dashboard from './components/Dashboard';

const stateLogo = "images/ILF-blue-horizontal.png";
const teamLinks = [
  {
    name: "Team-to-Team Award",
    url: `/team_to_team_award`
  }
];
const judgeLinks = [
  {
    name: "Scoresheet",
    url: `/scoresheet`
  },
  {
    name: "Presiding Judge Checklist",
    url: `/checklist`
  },
  {
    name: "Orientation Video",
    url: `/video`
  }
];

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/team_dashboard" exact>
          <Dashboard type="team" headerImage={stateLogo} links={teamLinks} />
        </Route>
        <Route path="/judge_dashboard" exact>
          <Dashboard type="judge" headerImage={stateLogo} links={judgeLinks} />
        </Route>
        <Route path="/team_to_team_award" exact>
          <h1>This is the /team_to_team_award page</h1>
        </Route>
        <Route path="/scoresheet" exact>
          <h1>This is the /scoresheet page</h1>
        </Route>
        <Route path="/checklist" exact>
          <h1>This is the /checklist page</h1>
        </Route>
        <Route path="/video" exact>
          <h1>This is the /video page</h1>
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
