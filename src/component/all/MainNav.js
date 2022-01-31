import React from 'react';
import Nav from '../landing/Nav';
import '../../scss/mainNav.css'

export default function MainNav() {
  return (
    <>
        <div className="cover">
          <Nav />
          <div className="mainNavInfo">
            <h2>About US</h2>
          </div>
        </div>
    </>
    );
}
