import React from 'react';
import logo from '../logo.jpg';

const header= ({fun})=>{
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
                    <a onClick={(e)=>{fun(e,'Indian Dish')}}>Indian Dish</a>
                 </li>
                 <li className="li">
                    <a onClick={(e)=>{fun(e,'Main Course')}}>Main Course</a>
                 </li>
                 <li className="li">
                    <a onClick={(e)=>{fun(e,'Desert')}}>Desert</a>
                 </li>
             </ul>
             </div>
        </div>
    </div>
    )
}

export default header;