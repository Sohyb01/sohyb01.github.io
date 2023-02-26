import './index.css';
import { Home } from './Components/Home';
import { NavLayout } from './Components/NavLayout';
import { Route, Routes } from 'react-router-dom';
import Crew from './Components/Crew';
import Destination from './Components/Destination';
import Technology from './Components/Technology';

function App() {
  return (
    <div className="App">
      {/* -----CODE BELOW HERE----- */}

      <NavLayout></NavLayout>

      <Routes>
        <Route path="/" element={<Home className="home"></Home>}></Route>
        <Route path="/Destination" element={<Destination></Destination>}></Route>
        <Route path="/Crew" element={<Crew></Crew>}></Route>
        <Route path="/Technology" element={<Technology></Technology>}></Route>
      </Routes>



      {/* -----CODE ABOVE HERE----- */}
    </div>
  );
}

export default App;
