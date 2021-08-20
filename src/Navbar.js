import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(<nav className='navbar'>
        <ul className='navList'>
            <li>
                <Link to='/' className='linkInNav'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='linkInNav'>About Us</Link>
            </li>
            <li>
                <Link to='/contacts' className='linkInNav'>Contact Us</Link>
            </li>
        </ul>
    </nav>)
}

export default Navbar;