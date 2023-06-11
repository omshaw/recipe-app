import React from 'react';
// import logo from '../Background.png';
const Input = ({value,update,submit}) => {
    const key = (e)=>{
        if(e.keyCode===13)
        {    
            submit(e);
        }
    }
    const clear=(e) =>{
        document.querySelector('.input-form .input').value='';
        update(e);
    }
    return (
        <div className="input-form">
            <input
                className="input"
                type="text"
                placeholder="Search a Recipes"
                onChange={(e)=>{
                    update(e);
                }}
                value={value}
                onKeyDown={key}
            />{
            value!='' && <i id="x" className="fa fa-times " style={{fontSize:"18px" ,color:"blue"} } onClick={clear}/>}
            <i className="fa fa-search " style={{fontSize:"22px" ,marginLeft:"15%"}} onClick={submit}/>            
            {/* <img className="search-icon"  src={logo} alt='' onClick={submit}/> */}
            {/* <button className ="btn" type="submit" onClick={submit}>search</button>  */}

        </div>
    )
}

export default Input;
