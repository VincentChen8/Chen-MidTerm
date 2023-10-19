import { useState } from 'react';
import './App.css';
import Register from "./components/Register/Register"
import Register from "./components/ReactHookForm/Example"

function App() {
  const [reForm, setReForm] = useState('register');
  return (
    <div classname="reApp">
      {
        reForm === "register" ? <Example/> : <Register/>
      }
    </div>
  );
}

export default App;
