import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Board from './pages/Board';
import Boards from './pages/Boards';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/minato/boards' exact component={Boards}/>
            <Route path='/b/board/new' exact component={Board}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
