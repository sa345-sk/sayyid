import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Unknown from './Unknown';
import Check from './Check';

function App() {

  return (
     <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />} />
            <Route path='/:id' element={<Check />} />
            <Route path='*' element={<Unknown />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
