import React from 'react';
const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
        
        <footer>
            <p>All right reserved © {year} </p>
        </footer>
        </>
    )
}
export default Footer;