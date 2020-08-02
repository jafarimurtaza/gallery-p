import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGride from './comps/ImageGride';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGride />
    </div>
  );
}

export default App;
