import React from 'react';
import "../App.css";


const Item = ({ item, deleteItem, onToggleItem }) => {
  
  
 return (

        <li>
            <input type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)}   />
            <span style={item.packed ? { textDecoration: "line-through"} : {}}>
            {item.description} {item.quantity}
            </span>
            <button onClick={() => deleteItem(item.id)}>✖</button>
        </li>


    
  )
}

export default Item;
