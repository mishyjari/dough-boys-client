import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../containers/About';
import Account from '../containers/Account';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import Main from '../containers/Main';
import Register from '../containers/Register';

const App = () => {
  console.log('app ');
  return (
    <div className='container fluid d-flex flex-column'>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
