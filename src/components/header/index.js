import React, { useMemo } from 'react';
import Container from '../container';
import './styles.css';

const Header = ({ topics }) => {
  const favorites = useMemo(() => topics.filter(item => item.favorite), [topics]);
  return (
    <div className='header-container'>
      <Container>
        <div className='header-nav'>
          <div className='header-nav-logo'>
            React Favorites
          </div>
          <div className='header-nav-right'>
            <a className='header-nav-item' onClick={}>
              Add topic
            </a>
            <a className='header-nav-item' onClick={}>
              My list ({favorites.length})
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;