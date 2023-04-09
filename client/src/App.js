import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Art from './components/Art';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routes>
          <Route element={<Art />} path="/Art/a" />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
