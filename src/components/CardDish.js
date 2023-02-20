import React from 'react'

function CardDish(props) {
// function showPopupHandler(){
//      alert("ghb")
// }
// console.log(props.showPopup(props.menuItem.strMeal));
console.log("fdv")
  return (
    <div style={{display:"flex",justifyContent:"center",marginLeft:"170px"
    }}>
      <li >
        <a href="javascript:;" onClick={()=>props.showPopupHandler(props.menuItem.strMeal)}>
                  <img src={props.menuItem.strMealThumb} className="br-10" alt=""/>
                    <h5>{props.menuItem.strMeal}</h5> 
                    </a>
                 </li>
    </div>
  )
}
export default CardDish;