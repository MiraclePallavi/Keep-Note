import React from 'react';

import logo from './images/logo.png';
const Header = ()=>{
    return(
        <>
        <div className="header"><img src={logo} alt="logo" className='logo' style={{height:'45px',width:'50px'}}/>
        <h1>Miracle World</h1>
        </div>
        </>
    )
}
export default Header;