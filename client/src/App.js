import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home.js';
import Detail from './pages/Detail/Detail.js'; 
import FormActivity from './pages/FormActivity/FormActivity.js'; 
import LandingPage from './pages/LandingPage/LandingPage.js';
import About from './pages/Soyabout/About.js';

 
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path='/home' element={<Home />}/>
      <Route path='/:id' element={<Detail />} />
      <Route path='/form' element={<FormActivity />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
