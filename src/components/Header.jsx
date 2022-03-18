import React from 'react';
import '../styles/Header.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Header({ isOpen, toggle }) {
  return (
    <div className="header">
      <button type="button" className="menu-button" onClick={toggle}>
        {isOpen ? (
          <MdClose className="menu-button-image" />
        ) : (
          <FiMenu className="menu-button-image" />
        )}
      </button>
      <h1 className="title">TodoList</h1>
    </div>
  );
}

export default Header;
