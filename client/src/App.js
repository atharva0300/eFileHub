import './App.css';
import 'react-lorem-ipsum';
import 'animate.css';

// importing components 
import Header from './components/Header';
import InfoPage from './components/InfoPage';
import Outer from './components/Outer';

function App() {
  return (
    <div className="App bg-gray-400">
      <Header />

      <InfoPage />

      <Outer />
    </div>
  );
}

export default App;
