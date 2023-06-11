import React from 'react'

const Footer= ()=>{
    return(
        <div className="f">
            <div className="f1">
                <p>Go To <a id="goto"href="https://www.food.com">Food.com</a> for more details</p>
            </div>
            <div className="f2">
                
                <a href="https://github.com"><i className="fab fa-github fa-2x" style={{color: "white"}}/></a>
                <a href="https://github.com"><i className="fab fa-linkedin fa-2x" style={{color: "white"}}/></a>
                <a href="https://github.com"><i className="fab fa-facebook fa-2x" style={{color: "white"}}/></a>
                <a href="https://github.com"><i className="fab fa-twitter fa-2x" style={{color: "white"}}/></a>
            </div>
        </div>
    );
}

export default Footer;