import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbaremp from "./components/Navbaremp"
import Emp from "./components/Emp"
import Addemp from "./components/Addemp"
import Editemp from "./components/Editemp"
import Dummy from "./components/Dummy"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Navbaremp/>
    <ToastContainer/>
    <div className="App">
      
      <Routes>
          
          <Route exact path="/" element={<Emp/>} />
          <Route exact path="/addemp" element={<Addemp/>} />
          <Route exact path="/editemp" element={<Editemp/>} />
          <Route exact path="/dummy" element={<Dummy/>} />
          
          
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
