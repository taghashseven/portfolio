import './App.css';
import './index.css'
import { NavBar , HomePage ,About  , FreelancingPage } from './components';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/service" element={<FreelancingPage />} />
    </Routes>
    </>
  );
}

export default App;
