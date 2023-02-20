import React,{useState,useEff, useEffect} from "react";
import Hero from "./Hero.jsx";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";
import Header from "./Header.js";
import { AllMenus } from "./AllMenuContext.js";

export const AllMenuContext=React.createContext()
export default function Menu(){
// let [menu,setMenu]=useState([]);

return(
    <div>
        <Header/>
        <Hero/>
        <AllMenus>

       
        {/* <AllMenuContext.Provider value={menu}> */}
        <SpecialDishes/>
      
        <FilteredDishes 
       />
        </AllMenus>
    {/* </AllMenuContext.Provider> */}
    </div>
)


//     let menuImages=menu.map((item) =>{
//         return(
//             <div>
// <img src={item.strMealThumb}/>
// <h2>{item.strCategory}</h2>
// </div>
//         )
//     })
//     return(
       
//         <div>{menuImages}</div>
//     )

}
