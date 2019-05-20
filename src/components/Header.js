import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/color/red">Red</Link>
        <Link to="/color/blue">Blue</Link>
        <Link to="/color/yellow">Yellow</Link>
      </nav>
    </header>
  );
}
