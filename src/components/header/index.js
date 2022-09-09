import React from 'react';
import Container from '../container';
import './styles.css';

const Header = () => {
  return (
    <div className='header-container'>
      <Container>
        <div className='header-nav'>
          <div className='header-nav-logo'>
            React Favorites
          </div>
          <div className='header-nav-right'>
            <div className='header-nav-item'>
              Add favorite
            </div>
            <div className='header-nav-item'>
              My list favorite
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;