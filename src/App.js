

import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Common/Footer';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      

      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
