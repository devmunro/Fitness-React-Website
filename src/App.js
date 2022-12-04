import './App.css';

import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import ExerciseDetails from './Pages/ExerciseDetails';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/Fitness-React-Website" element={<Home/>}></Route>
        <Route path="/Fitness-React-Website/exercise/:id" element={<ExerciseDetails/>}></Route>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
