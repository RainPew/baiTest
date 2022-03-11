import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import Login from './pages/Login/Login';
import Add from "./pages/AddList/Add";
import { UserTemplate } from './templates/UserTemplate/UserTemplate';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path="/" exact Component={Login} />
        <UserTemplate path="/add" exact Component={Add} />
      </Switch>
    </Router>
  );
}

export default App;



