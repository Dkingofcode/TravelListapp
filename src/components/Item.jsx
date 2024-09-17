import React from 'react'

const Item = ({ item, deleteItem, onToggleItem }) => {
  
  
 return (
    <div>

        <li>
            <input type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)}   />
            <span style={item.packed ? { textDecoration: "line-through"} : {}}>
            {item.description} {item.quantity}
            </span>
            <button onClick={() => deleteItem(item.id)}>✖</button>
        </li>


    </div>
  )
}

export default Item;
