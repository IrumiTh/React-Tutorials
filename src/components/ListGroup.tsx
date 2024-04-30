import { useState } from "react";

interface Props{
    items: string[];
    Heading: string;
    onSelectItem: (item: string)=> (void);
}

function ListGroup({items,Heading, onSelectItem}: Props) {
  
    
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{Heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group list-group-flush">
        {items.map((item,index) => (
          <li
            className={
                selectedIndex === index ? "list-group-item active" : "list-group-item" 
            }
            key={item}
            onClick={() => {setSelectedIndex(index), onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
