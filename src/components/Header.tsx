/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  interface Link {
    label: String;
    href: String;
  }
  // Temporary hard code currentUser until Auth server is set up
  const currentUser = false;
  const links: JSX.Element[] = [
    // Render links selectively based on user sessions status
    currentUser
      ? { label: 'Sign Out', href: '/signout' }
      : { label: 'Sign In', href: '/login' },
    currentUser
      ? { label: 'Account', href: '/account' }
      : { label: 'Register', href: '/register' },
    // Always Rendered
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]
    // Create a JSX Element for each link
    .map(({ href, label }) => (
      <li key={href} className='nav-item'>
        <Link to={href} className='nav-link'>
          {label}
        </Link>
      </li>
    ));

  return (
    <nav className='navbar navbar-light bg-light w-100'>
      <Link to='/'>
        <a className='navbar-brand'>
          <h1 id='brand'>The Dough Boys</h1>
        </a>
      </Link>

      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
