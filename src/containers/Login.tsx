import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className='card m-auto'>
      <div className='card-body'>
        <h3 className='card-title'>Login</h3>
        <div className='card-text'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
