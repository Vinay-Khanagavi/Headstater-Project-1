import React from 'react';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
