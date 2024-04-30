import { useState } from "react";

function ListGroup() {
  let items = ["New York", "London", "Paris", "Rome"];
    
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group list-group-flush">
        {items.map((item,index) => (
          <li
            className={
                selectedIndex === index ? "list-group-item active" : "list-group-item" 
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
