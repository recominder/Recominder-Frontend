import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import login from './login'
import Home from './Home'
import register from './register'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>

      </Switch>
    </main>
  );
}

export default App;
