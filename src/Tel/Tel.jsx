import React from "react";
import "./tel.css"
import img from "../assets/img/tel.png"

const Tel = ()=>{
    return(
        <div>
          <div className="tel">
            <h1 className="telh1">Cлужба поддержки: 71 250 8989</h1>
            <h1 className="telh2">1Zumda в соц.сеты:</h1>
            <img src={img} alt="" className="imgt" />
          </div>
        </div>
    )
}

export default Tel