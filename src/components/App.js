import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Red from './Red';
// import Yellow from './Yellow';
// import Blue from './Blue';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/red" component={Red} />
        <Route path="/yellow" component={Yellow} />
        <Route path="/blue" component={Blue} /> */}
        <Route path="/color/:id" component={Color} />
      </Switch>
    </Router>
  );
}
