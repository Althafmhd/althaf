import React from 'react'
import { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer"
import AddIten from "./AddIten";
import SearchItem from "./SearchItem";
const Content=()=>{
      const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list'))
      );

      const [newItems,setNewItems]=useState('');

      const[searchItem,searchNewItem]=useState('');

      const searchFilter=items.filter(item=>{
        return (item.item).includes(searchItem);
      })
      
      
      
      const addItem=(item)=>{
        const id=items.length ? items[items.length-1].id+1:1;
        const addNewItem ={id, checked:false ,item}
        const listItems=[...items, addNewItem]
        setItems(listItems)
        localStorage.setItem("todo_List",JSON.stringify(listItems))
      }

      const handChange=(id)=>{
        const listItems = items.map((item)=>
        item.id===id?{...item, checked:!item.checked}:item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
      }

      const handClick=(id)=>{
        const deleteItem=items.filter((item)=> item.id!==id);
        setItems(deleteItem)
        localStorage.setItem("todo_list",JSON.stringify(deleteItem))
      }

      const handSumbit=(e) => {
        e.preventDefault();
        if (!newItems) return;
        console.log(newItems);
        addItem(newItems);
        setNewItems('');
        
      }

    return(
        
        <div>
            <SearchItem 
            searchItem={searchItem}
            searchNewItem={searchNewItem}/><br></br>
            <AddIten 
              newItems={newItems}
              setNewItems={setNewItems}
              handSumbit={handSumbit}
            />
            <Header 
            
            filer={searchFilter}
            handChange={handChange}
            handClick ={handClick}
            />
            <Footer length={items.length}/>
           
            
        </div>
      
    )
   
  }

export default Content