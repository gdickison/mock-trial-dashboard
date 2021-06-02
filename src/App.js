import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyTeam from './components/MyTeam';
import FourOhFour from './components/FourOhFour';
import Dashboard from './components/Dashboard';
import OrientationVideo from './components/OrientationVideo';
import Registration from './components/Registration';

const stateLogo = "images/ILF-blue-horizontal.png";
const homeLinks = [
  {
    name: "Team Dashboard",
    url: `/team_dashboard`
  },
  {
    name: "Judge Dashboard",
    url: `/judge_dashboard`
  }
]
const teamLinks = [
  {
    name: "Team-to-Team Award",
    url: `/team_to_team_award`
  },
  {
    name: "Register a Team",
    url: `/register_team`
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
          <Home links={homeLinks} type="home" headerImage={stateLogo} />
        </Route>
        <Route path="/my_team" exact>
          <MyTeam links={homeLinks} type="My_Team" headerImage={stateLogo} />
        </Route>
        <Route path="/team_dashboard" exact>
          <Dashboard type="team" headerImage={stateLogo} links={teamLinks} />
        </Route>
        <Route path="/judge_dashboard" exact>
          <Dashboard type="judge" headerImage={stateLogo} alt={"state logo"} links={judgeLinks} />
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
        <Route path="/video" exact >
          <OrientationVideo video="https://www.youtube.com/embed/umC_MY8QqXQ" />
        </Route>
        <Route path="/register_team" exact>
          <Registration />
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
