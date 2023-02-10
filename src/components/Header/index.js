import React from 'react';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <h1>Feane</h1>
      <header>
        <a className="links" href="/">
          Home
        </a>
        <a className="links" href="cardapios">
          Cardapios
        </a>
        <a className="links" href="/d">
          {' '}
          About
        </a>
        <a className="links" href="/d">
          {' '}
          Batela de livro
        </a>
      </header>
      <div className="icons-btn">
        <a href="/d">
          {' '}
          <FaUserAlt size={17} />
        </a>{' '}
        <a href="/d">
          {' '}
          <FaShoppingCart size={17} />
        </a>{' '}
        <a href="/d">
          {' '}
          <AiOutlineSearch size={17} />
        </a>
        <button type="submit">Peça oline</button>
      </div>
    </Nav>
  );
}
