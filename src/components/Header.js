import React from 'react'; 
//  'react-router-dom';

const Header = () => { 
    return ( 
        <header className="fetchfolk-navbar"> 
            <h1 className="fetchfolk-logo">FetchFolk</h1> 
            <nav className="fetchfolk-nav-links"> 
                <a className="fetchfolk-nav-link" href="/">Home</a> 
                <a className="fetchfolk-nav-link" href="/services">Services</a> 
                <a className="fetchfolk-nav-link" href="/find-services">Find Services</a> 
                <a className="fetchfolk-nav-link" href="/about">About Us</a>
            </nav> 
        </header> 
    ); 
};

export default Header;
