import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";


const uniqueList = [
  ...new Set(Menu.map((curElem) =>{
 
   return curElem.category;

})
),

 "All",

];


const Restaurant = () => {
  
   const [menuData, setMenudata] = useState(Menu);
   const [menuList, setMenuList] = useState(uniqueList);

   const filterItem = (category) => {

   if(category === 'All'){
     setMenudata(Menu);
     return;
   }
     

     const updatedList = Menu.filter((curElem)=>{
 
        return curElem.category === category;
 
    });

    

    setMenudata(updatedList);
     

   };


  return (
    <>


    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
  
  
   </>
  );
};

export default Restaurant;