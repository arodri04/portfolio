import React from 'react';
import NavBar from './components/NavBar'
import TitleComp from './components/title/title'
import Opening from './components/content/opening'
import './App.css';
import Languages from './components/languages/languages';
import Recent from './components/content/recent/recent'
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
        <div>
          <NavBar />
        </div>
        <TitleComp />
        <Opening />
        <Languages />
        <Recent /> 
        <Footer />
    </div>
  );
}

export default App;
