import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import FoodEntry from "./components/FoodEntry"
import './App.css';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodEntries" element={<FoodEntry />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
