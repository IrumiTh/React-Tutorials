import ListGroup from "./components/ListGroup";
let items = ["New York", "London", "Paris", "Rome"];
function App(){
  return <div><ListGroup items={items} Heading="Cities" /></div>
}

export default App;