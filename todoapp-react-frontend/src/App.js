import React from 'react';
import './App.css';
import FooterComponent from './compontens/FooterComponent';
import HeaderComponent from './compontens/HeaderComponent';
import ListTaskComponent from './compontens/ListTaskComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch> https://localhost:3000/
              <Route path="/" component={ListTaskComponent}></Route>
              <Route path="/tasks" component={ListTaskComponent}></Route>
              <ListTaskComponent />
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
