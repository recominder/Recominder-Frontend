/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import login from './pages/login'
import Home from './pages/Home'
import register from './pages/register'
import User from './pages/User'
// maybe add protected route?

function App() {
  return (
    <CookiesProvider>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
          {/* <Route path="/:id" component={User} /> */}
        </Switch>
      </div>
    </CookiesProvider>
  );
}

export default App;
