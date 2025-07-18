import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
