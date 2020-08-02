import React , { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGride from './comps/ImageGride';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setselectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGride />
      <Modal />
    </div>
  );
}

export default App;
