import React from "react";
import Fod from "./Fod"
const Fodota = () =>{
    const data = [
        {
          id: 1,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
   
        },
        {
          id: 2,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 3,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 4,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 5,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 6,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 7,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 8,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 9,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 10,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 11,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        },
        {
          id: 12,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        }
        ,
        {
          id: 13,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        }
        ,
        {
          id: 14,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        }
        ,
        {
          id: 15,
          name: "Dilkash",
          title: "Азиатская, национальная кухния, десерт, выпичка",
        }
      ]
return(
    <div>

    <div className="con">
    {
          data.map((itme) => (
            <Fod  itme={itme} />
          ))
      }
    </div>
    </div>
)
}

export default Fodota
