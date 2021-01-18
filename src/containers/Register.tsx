import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className='card m-auto'>
      <div className='card-body'>
        <h3 className='card-title'>Register</h3>
        <div className='card-text'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
