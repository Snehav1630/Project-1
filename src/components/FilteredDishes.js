import React, { useContext,useEffect, useState } from 'react'
import Pagination from './Pagination'
import CardDish from './CardDish'
import { AllMenuContext } from './AllMenuContext'

export default function FilteredDishes(props) {


  let[menuCategory,setMenuCategory]=useState([]);

  let[singleDish, setSingleDish] = useState([]);
  
  let allMenus=useContext(AllMenuContext)
  // let[allMenus,setAllMenus]=useState(props.allMenus)
  let[filteredDishes,setFilteredDishes]=useState([])
  let [activeDish,setActiveDish]=useState("Beef")
  let[currentPage,setCurrentPage]=useState(1)
  let[itemsPerPage,setItemsPerPage]=useState(4) 

  let indexOfLastDish =currentPage * itemsPerPage;
  let indexOfFirstDish =indexOfLastDish - itemsPerPage;
  let showTheseDishesNow= filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
  let maxItem=8
  let singleDishItems = singleDish.map((item,index) => {
    if(index<maxItem){
    return(
      <li>
        <img src={item.strMealThumb} className = "br-10" alt="" />
        <h5>
          {item.strMeal}
        </h5>
      </li>
    )
    }
  })


  
  
  
     
      async function getAllTheCategories(){
          const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
      let response=await fetch(API_URL)
      let categoryData=await response.json()
      setMenuCategory(categoryData.categories);
      
      }
  
  
      async function getOnlyOneDish(){
          const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      let response=await fetch(API_URL)
      let singleDishData=await response.json()
      setSingleDish(singleDishData.meals)
      
      } 
      useEffect(()=>{
       
        getAllTheCategories();
        getOnlyOneDish();
     },[])

  
  function showFilterdDishesHandler(category){
    setSingleDish([])
    setActiveDish(category)
    let filteredDishesAre=allMenus.filter((item)=>{
    return item.strCategory===category
}).map((menuItem)=>{
    return(
      <CardDish menuItem={menuItem}/>
        // <li>
        //     <img src={item.strMealThumb} className='br-10' alt=""/>
        //     <h5>{item.strMeal}</h5>
        //     </li>
    )
})
setFilteredDishes(filteredDishesAre)
    }

    let allCategories=menuCategory.map((item)=>{
        return(
            <li className={item.strCategory==activeDish?"active":""} onClick={()=>{showFilterdDishesHandler(item.strCategory)}}>{item.strCategory}</li>
        )
    })
  return (
    <div className='filtred-dishes'>
        <div className='container'>
        <div className='text-center'>
        <h2>Choose your dishes </h2>
      <p>Dishes</p>
        </div>
      <div className='filterd-dishes'>
        <ul>
            {allCategories}
        </ul>
      </div>
      <div className='filtered-dishes-results'>
        <ul className='flex flex-wrap gap-30'>
        {singleDishItems}
           {singleDishItems !=0 || filteredDishes.length !=0 ? showTheseDishesNow:
           <div className='alert'>
           
             <h3>Sorry,No items found</h3>

             <h4>Please choose another menu</h4>
            
            </div>}
        </ul>
   </div>
        <Pagination
        filteredDishes={filteredDishes}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        ></Pagination>
     
    </div>
    </div>
  )
}
