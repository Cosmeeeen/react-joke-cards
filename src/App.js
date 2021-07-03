import './App.css';
import Particles from 'react-particles-js';
import { particlesConfig } from './particlesjs-config'
import JokeCard from './Components/JokeCard';

function App() {
  return (
    <div className="App">
      <Particles params={particlesConfig}/>
      <JokeCard />
    </div>
  );
}

export default App;
