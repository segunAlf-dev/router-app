
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { SignUp } from './components/SignUp';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <NavBar />  
      <Routes> 
          
        <Route path='/' element={<Login/>} />    
        <Route path='/SignUp' element={<SignUp/>} />
        
           
          
        </Routes>


    </div>
  );
}

export default App;
