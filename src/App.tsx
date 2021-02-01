import React from 'react';
import Gallery from './containers/Gallery/Gallery';
import { loadGalleryData } from './hooks/loadGalleryData';

function App() {
  
  loadGalleryData('pug');

  return (
    <React.Fragment>
      <Gallery/>
    </React.Fragment>
  );
}

export default App;
