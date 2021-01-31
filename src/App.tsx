import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Gallery from './containers/Gallery/Gallery';
import { getBreeds } from './store/reducers/breeds/actions';
import { searchAction } from './store/reducers/gallery/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBreeds());
    const search = searchAction(dispatch);
    search('pug');
  });
  
  return (
    <React.Fragment>
      <Gallery/>
      <footer className="footer">By <a href="https://rishiraj.co" target="_blank">Rishi Raj</a></footer>
    </React.Fragment>
  );
}

export default App;
