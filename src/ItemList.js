import React from 'react'

import LineItem from "./LineItem";
 const ItemList =({items,handChange,handClick})=>{
    return(
        <ul>
        {items.map((item)=>(
           <LineItem 
           item={item}
           key={item.id}
           handChange={handChange}
           handClick={handClick} />
        ))}
        
    </ul>
    )
 }
 export default ItemList