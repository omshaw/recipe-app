import React from 'react';
import logo from '../logo.jpg';

const header= ({h})=>{
    return(
    <div className="header">
        <div className="nav">
            <img src={logo} id='logo' alt=""/>
            <span>BEST RECIPE</span>
            <div className="opt">
             <ul>
                 <li className="li">
                    <a href="/">Home</a>
                 </li>
                 <li className="li">
                    <a href="/indian dish">Indian Dish</a>
                 </li>
                 <li className="li">
                    <a href="/main course">Main Course</a>
                 </li>
                 <li className="li">
                    <a href="/desert">Desert</a>
                 </li>
             </ul>
             </div>
        </div>

    </div>
    )
}

export default header;