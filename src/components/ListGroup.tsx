function ListGroup() {
    let items = ["New York", "London", "Paris", "Rome"];
    items = [];
  return (
    <>
        <h1>List Group</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group list-group-flush">
          {items.map((item)=> <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
