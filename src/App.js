import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './routing/Router';

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
