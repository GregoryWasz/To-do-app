import React from 'react';
import './App.css';
import FooterComponent from './compontens/FooterComponent';
import HeaderComponent from './compontens/HeaderComponent';
import ListTaskComponent from './compontens/ListTaskComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateTaskComponent from './compontens/CreateTaskComponent';
import UpdateTaskComponent from './compontens/UpdateTaskComponent';
function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path="/" exact component={ListTaskComponent}></Route>
              <Route path="/tasks" component={ListTaskComponent}></Route>
              <Route path="/create-task" component={CreateTaskComponent}></Route>
              <Route path="/update-task/:id" component={UpdateTaskComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
