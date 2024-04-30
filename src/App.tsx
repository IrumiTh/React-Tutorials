import ListGroup from "./components/ListGroup";
let items = ["New York", "London", "Paris", "Rome"];
const handleSelectItem = (item: string) => {
  console.log(item);
}
function App(){
  return <div><ListGroup items={items} Heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;