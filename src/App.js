
import './App.css';
import Form from './Components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Redirectpage from './Components/Redirectpage';
function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
        <div className="App">
          <Routes>
          <Route exact path="/" element={<Form />} />
            <Route path='/Redirectpage' element={<Redirectpage />} />
          </Routes>
      
        </div>
    </BrowserRouter>
  );
}

export default App;

