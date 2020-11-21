//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFenpTLO4IEP0uIjif7nK4-Z0a71KgdjdYrw&usqp=CAU
//background-image

import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__image">
            <img src="https://i.imgur.com/WN8YaEH.png" alt="banner" className="log__img"/>
            </div>
            <div className="login__log">
                <label className="inp__field">
                    Email
                </label>
                <input className="inp__field" type="text" placeholder="gmail">
                </input><br/>
                <label className="inp__field1">
                    password
                </label>
                <input className="inp__field1" type="password" placeholder="">
                </input>
                <img className = "nav__logo"
            src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=24"
            alt="Netflix-logo"
            />
            </div>
           
            
        </div>
    )
}

export default Login
