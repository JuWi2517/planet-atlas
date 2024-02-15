import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PlanetList from "./PlanetList";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<PlanetList/>} />
        </Routes>
      </Router>
  );
}

export default App;
