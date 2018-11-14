import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/menu">Menu</Link>
            <Link className="links" to="/services">Services</Link>
            <Link className="links" to="/blog">Blog</Link>
        </div>
    )
}

export default Navigation;