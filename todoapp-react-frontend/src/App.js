import React from 'react';
import './App.css';
import FooterComponent from './compontens/FooterComponent';
import HeaderComponent from './compontens/HeaderComponent';
import ListTaskComponent from './compontens/ListTaskComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateTaskComponent from './compontens/CreateTaskComponent';
import UpdateTaskComponent from './compontens/UpdateTaskComponent';
import ViewTaskComponent from './compontens/ViewTaskComponent';


function App() {
  return (
    <div >
      <Router>
          <HeaderComponent />
          <div className="container" style={{marginBottom: "50px"}}>
            <Switch> 
              <Route path="/" exact component={ListTaskComponent}></Route>
              <Route path="/tasks" component={ListTaskComponent}></Route>
              <Route path="/create-task" component={CreateTaskComponent}></Route>
              <Route path="/update-task/:id" component={UpdateTaskComponent}></Route>
              <Route path="/view-task/:id" component={ViewTaskComponent}></Route>             
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
