import React from "react";
import  "../Search/search.css";
import img from "../assets/img/velik.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Serchel = () =>{
    return(
        <div>
         <input type="text" className="qidruv" placeholder="Названия блюда и товар или кухния "  />
         <img src={img} alt=""  className="img"/>
         <FontAwesomeIcon icon={faMagnifyingGlass}  className="ser"/>
        
        </div>
      
    )
}

export default Serchel