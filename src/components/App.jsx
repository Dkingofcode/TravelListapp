import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../App.css';
import Form from './Form'
import Logo from './Logo'
import PackingList from './PackingList'
import Stats from './Stats'



function App() {
 // const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
}

function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
}

function handleToggleItem(id) {
    setItems((items) => 
      items.map((item) => 
     item.id === id ? {...item, packed: !item.packed } : item
     )
  )
}

function handleClearlist() {
    setItems([]);
}


  return (
    <>
      <div>
        <div>
      <Logo  />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearlist}  />
      <Stats items={items} />
    </div>
   </div>
      
    </>
  )
}

export default App;
