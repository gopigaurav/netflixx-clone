import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true);

            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");

        };
 }, [])
    

    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <img className = "nav__avatar"
            src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png"
            alt="Netflix-logo"
            />
            
        </div>
    )
}

export default Nav
