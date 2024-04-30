function ListGroup() {
    const items = ["New York", "London", "Paris", "Rome"];
  return (
    <>
        <h1>List Group</h1>
        <ul className="list-group list-group-flush">
          {items.map((item)=> <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
