import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Boards from './pages/Boards';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/minato/boards' exact component={Boards}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
