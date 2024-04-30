import  { useState } from 'react';
import Alerts from "./components/Alerts";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        My button
      </Button>
      {showAlert && <Alerts onClose={() => setShowAlert(false)}>Alert</Alerts>}
    </div>
  );
}

export default App;
