import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Gallery from './containers/Gallery/Gallery';
import { getBreeds } from './store/reducers/breeds/actions';
import { searchAction, setQuery } from './store/reducers/gallery/actions';

function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getBreeds());
      dispatch(setQuery('pug'))
      const search = searchAction(dispatch);
      search();
  });

  return <Gallery/>;
}

export default App;
