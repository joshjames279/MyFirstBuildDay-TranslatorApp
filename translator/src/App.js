import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading/Heading';
import French from './components/French/French';

function App() {
  return (
    <div className="App">
      <Heading text="French Translator" />
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <French />
        </p>
      
    </div>
  );
}

export default App;
