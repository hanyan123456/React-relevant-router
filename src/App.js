import React from 'react';
// import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/index';
import Shopping from './pages/shopping/index';
import MyInfo from './pages/my/index';
import Navigation from './component/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/myInfo" component={MyInfo} />
      </Switch>
      <Navigation></Navigation>
    </BrowserRouter>
  );
}

export default App;
