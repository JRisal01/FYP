import React from 'react'
import '../../scss/nav.css'; 

export default function Nav() {
    return (
        <>
            <nav className='l-container flex nav'>
                <figure className="nav-logo">
                    <a href="#">
                        <img src="./compimage/nav/logo.png" alt="" />
                    </a>
                </figure>
                <div className="nav-navication">
                <figure className="nav-ham_menu">
                    <a href="#">
                        <img src="./compimage/nav/ham_menu.png" alt="" />
                    </a>
                </figure>
                </div>
            </nav>
        </>
    )
}


