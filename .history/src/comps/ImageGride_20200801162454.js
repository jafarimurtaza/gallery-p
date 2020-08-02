import React from 'react';
import {}
import useFirestore from './hooks/useFirestore.js';

const ImageGride = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)} >
                <img src={doc.url} alt="uploaded pc" />
                </div>
            ))}
        </div>
    )
}

export default ImageGride
