
import "../App.scss";
import CardDish from "../components/CardDish";
import React, { useContext, useState } from "react";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";


function SpecialDishes(props){
let[showPopUp,setShowPopup]=useState(false);
let[currentDish,setCurrentDish]=useState('');
let[addToCartItem,setAddToCartItem]=useState([{}]);

const allMenus=useContext(AllMenuContext)

function showPopupHandler(dishName){
    setShowPopup(true)
    setCurrentDish(dishName)
}
function closePopupHandler(){
    setShowPopup(false)
}

function addToCartHandler(addToCartImg,addToCartTitle){
setAddToCartItem(
    [
        ...addToCartItem,
        {
            "img":addToCartImg,
            "title":addToCartTitle,
        }
    ]
)
}

    let specialMenus=allMenus.map((menuItem,index) =>{
        let maxSpecialDishes=8;
       if(index< maxSpecialDishes){
        console.log("sneh",menuItem)
        return<CardDish menuItem={menuItem} showPopupHandler={showPopupHandler} addToCartHandler={addToCartHandler}/>;
           
            
        
                   }
    })
    return(
        <section className="special-dishes">
          
          {showPopUp && <Popup
           closePopup={closePopupHandler}
            currentDish= {currentDish} 
            addToCartHandler={addToCartHandler}/>}
        {/* <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"/> */}
       {/* <div className="container"> */}
       <AddToCart addToCartItem={addToCartItem}/>
        <div className="special-dishes-content text-center">
        <h2>
        Our Special Dishes
        </h2>
        {/* <p>df</p> */}
        </div>
        <div className="special-dishes-list">
        <ul className="flex flex-wrap gap-30">
            {specialMenus}
            </ul>
            {/* </div> */}
       </div>
       
        </section>
    )
    }
    export default  SpecialDishes