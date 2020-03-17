import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Meetup from './component/content/Meetup';
import Explore from './component/content/Explore';

export default function Main() {
  return (
    <Router>
        <Switch>
          <Route path="/Meetup" component={Meetup}>
            {/* <About /> */}
          </Route>
          <Route path="/Explore" component={Explore} >
            {/* <Users /> */}
          </Route>
          <Route path="/" component={App}>
            {/* <Home /> */}
          </Route>
        </Switch>
    </Router>
  );
}