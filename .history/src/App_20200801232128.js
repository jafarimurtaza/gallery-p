import React , { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGride from './comps/ImageGride';
import Footer from './comps/Footer';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <Log
      <UploadForm />
      <ImageGride setSelectedImg={setSelectedImg} />
     { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
     <Footer />
    </div>
  );
}

export default App;
