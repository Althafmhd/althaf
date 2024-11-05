import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
const LineItem=({item,handChange,handClick})=>{
    return (
        <li className="list" >
        <input 
        type="checkbox"
        onChange={()=>handChange(item.id)}
        
        checked={item.checked}
        />
        <label onDoubleClick={() => handChange(item.id)}>{item.item}</label>
        < FaTrashAlt 
        
        role="button"
        onClick={()=>handClick(item.id)}
        tabIndex="0"
        
        />
        </li>
    )
}
export default LineItem;