import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import axios from "axios";

// axios.defaults.baseURL = "https://grupo13-pf-production.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001/"


function App() {
  return (
      <div className="App">
        <Route exact path="/"> <Home/> </Route>
      </div>
  );
}

export default App;