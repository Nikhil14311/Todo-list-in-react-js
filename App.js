import React, { useState } from 'react'
import ListOfItems from './ListOfItems';
const App = () => {
  const [Item, setItem] = useState('');
  const [AddItem, setAddItem] = useState([]);
  const changeTxtHandler = (e) => {
    setItem(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newItems = [...AddItem,Item]
    setAddItem(newItems)
    setItem("")
  }
  const deleteHandler = (indexvalue) => {
    const filterItems = AddItem.filter((index) => index !== indexvalue)
    setAddItem(filterItems)
  }
  return (
    <center>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Add Item" value={Item} onChange={changeTxtHandler}/>
        <button name="list" value="list">ADD</button>
      </form>
      <ListOfItems
        listItems = {AddItem}
        deleteHandler = {deleteHandler}
      />
    </center>
  )
}
export default App
