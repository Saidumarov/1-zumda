import React from "react";
import "./fod.css"
import img from "../assets/img/dilkash.png"
import img1 from "../assets/img/dilcosh.png"
import img2 from "../assets/img/velikcha.png"
import img3 from "../assets/img/yurak.png"





const Fod = ({itme}) =>{
    
    return(
        <div>
         
                <div className="fod">
                   <img src={img} alt="" className="fodimg"/>
                    <h1 className="diltet">{itme.name}</h1>
                    <p className="diltet1">{itme.title}</p>
                    <img src={img1} alt=""  className="dil"/>
                    <div className="tez">
                        <img src={img2} alt="" className="vel" />13.000
                    </div>
                    <div className="yurak">
                        <img src={img3} alt="" className="yurimg" />
                    </div>
                </div>
           
            
        </div>
    )
}
export default Fod