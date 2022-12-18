import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import { Router } from './routing/Router';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;


function ScrollToTop(){

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}