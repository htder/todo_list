import React from 'react';
import '../styles/Header.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Header({ isOpen, toggle }) {
  return (
    <div className="header">
      <button className="menu-button" onClick={toggle}>
        {isOpen ? <MdClose /> : <FiMenu />}
      </button>
      <h1 className="title">TodoList</h1>
    </div>
  );
}

export default Header;
