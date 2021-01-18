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
    <div className='main d-flex align-items-start flex-column'>
      <Router>
        <Header />
        <div className='d-flex w-100 align-content-center'>
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
        </div>
        <div className='container-fluid mt-auto p-2'>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
