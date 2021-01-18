import React from 'react';

const Contact = () => {
  return (
    <div className='card m-auto'>
      <div className='card-body'>
        <h3 className='card-title'>Contact</h3>
        <div className='card-text'>
          <h5>Phone</h5>
          <p>(617) 555-1234</p>
          <h5>Email</h5>
          <p>
            <a href='mailto:example@mail.com'>example@mail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
