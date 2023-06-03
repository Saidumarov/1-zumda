import React from "react";
import img from "../assets/img/baby.png"
import img1 from "../assets/img/anzebl.png"
import img2 from "../assets/img/serob.png"
import img3 from "../assets/img/moy.png"
import img4 from "../assets/img/lays.png"
import img5 from "../assets/img/non.png"
import img6 from "../assets/img/plus.png"
import img7 from "../assets/img/burger.png"
import img8 from "../assets/img/frest.png"
import img9 from "../assets/img/pizza.png"




const Menyuel = () => {

    return (
        <div>
            <div className="menyu" >

                <div className="menyuel" >
                    <img src={img} alt="" className="img1" />
                    <img src={img1} alt="" className="img2" />
                    <h1 className="mh1">Аптека</h1>
                    <img src={img2} alt="" className="img3" />
                    <img src={img2} alt="" className="img4" />

                </div>
                <div className="menyuel" id="men1">
                    <img src={img3} alt="" className="img5" />
                    <img src={img4} alt="" className="img6" />
                    <img src={img5} alt="" className="img7" />
                    <h1 className="mh2">Магазины</h1>
                    <img src={img6} alt="" className="img8" />
                    <img src={img6} alt="" className="img9" />


                </div>
                <div className="menyuel" id="men2" >
                    <img src={img7} alt="" className="img10" />
                    <img src={img8} alt="" className="img11" />
                    <img src={img9} alt="" className="img12" />
                    <h1 className="mh3">Популярный
                        фаст фуд </h1>


                </div>
                <div className="menyuel" id="men3" >
                <h1 className="mh4">Базары</h1>

                </div>

            </div>
        </div>
    )
}
export default Menyuel