import React from "react";
import "./nav.css"
import img from "../assets/img/manzil.png"
import img1 from "../assets/img/odam.png"

const Nav = () => {

    return (
        <div>
         
            <div className="bar"></div>
            <div className="bar1"></div>

            <nav>
                <div className="nav">
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="manzil">
                        <img src={img} alt="" className="imgm" />

                        <p className="navp">  Укажите адрес доставки: Микрорайон 5/3  </p>
                    </div>
                    <div className="kirish">
                     <img src={img1} alt="" className="odam" />
                     <p>Войти</p>
                    </div>
                </div>
            </nav>
        </div>
        
    )
    

}

export default Nav