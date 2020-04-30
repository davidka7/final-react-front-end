import React from "react";
import Data from '../components/Data'
import Search from '../components/Search'
import Advanced from '../components/Advanced'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Account() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Data">Data</Link>
            </li>
            <li>
              <Link to="/Search">Seach</Link>
            </li>
            <li>
              <Link to="/Advanced">Advanced</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Data">
            <Data />
            </Route>
            <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Advanced">
            <Advanced />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

