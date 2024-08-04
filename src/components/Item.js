import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = React.useState(false);
  const toggleCart =() => {
    setInCart(!inCart);
  }
  return (
    <li className= {inCart ? "true" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
