import React from "react";
import "./nav.css"
import img from "../assets/img/manzil.png"
import img1 from "../assets/img/odam.png"

const Nav = () => {

    function bar1() {
        const bar = document.querySelector(".bar")
        let bar1 = document.querySelector(".bar1")

        // bar.style.left = "0%"
        bar1.classList.toggle("active")
        bar.classList.toggle("active")
    }

    // let nav = document.querySelector(".bar")


    return (
        <div>

            <div className="bar" >
               <div className="kir"><img src={img1} alt="" className="odam" />
               <p>Войти</p></div>
               <div className="manz">
                <img src={img} alt="" className="imgm" />
                <p>Укажите адрес</p>
               </div>
            </div>



            <nav>
                <div className="nav">
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="bar1" onClick={bar1}>
                        <div className="barr" style={{transition:".4s"}}></div>
                        <div className="barr" style={{transition:".2s"}}></div>
                        <div className="barr" style={{transition:".4s"}}></div>


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