import React from 'react';
import { Switch, Route } from 'react-router-dom'
import login from './pages/login'
import Home from './pages/Home'
import register from './pages/register'

function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>

      </Switch>
    </div>
  );
}

export default App;
