import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
