import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [data, setData] = useState(items);
  function changeFn(event){
     const filterFn = items.filter((item)=> {
      if(item.category===event.target.value){
       return item
      }
     })
     setData(filterFn)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeFn}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {data.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
