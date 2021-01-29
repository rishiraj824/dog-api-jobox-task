import React from 'react';
import './App.css';
import Gallery from './containers/Gallery/Gallery';

function App() {
  return (
    <React.Fragment>
      <header>Search for your Favourite Dog!</header>
      <Gallery/>
      <footer>By <a href="https://rishiraj.co" target="_blank">Rishi Raj</a></footer>
    </React.Fragment>
  );
}

export default App;
