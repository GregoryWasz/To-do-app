import React from 'react';
import './App.css';
import FooterComponent from './compontens/FooterComponent';
import HeaderComponent from './compontens/HeaderComponent';
import ListTaskComponent from './compontens/ListTaskComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
          <div><ListTaskComponent /></div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
