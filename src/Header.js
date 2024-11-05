import React from 'react'
import ItemList from "./ItemList"

const Header=({items,handChange,handClick})=>{

    return(
        <main>
            <h1>ViewMeterValue</h1>
            {(items.length) ? (
                <ItemList 
                items={items}
            
                handChange={handChange}
                handClick ={handClick}
                />
            ):(<p>Your List is empty</p>)}
        </main>
    )
      
     
}


export default Header