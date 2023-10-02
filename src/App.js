import './App.css';
import './index.css'
import { NavBar , HomePage ,About  , FreelancingPage } from './components';

function App() {
  return (
    <div className='container mx-auto '>
      <NavBar />
      <HomePage />
      <About />
      <FreelancingPage />
    </div>
  );
}

export default App;
