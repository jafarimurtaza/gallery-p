import React from 'react'
import useFirestore from './hooks/useFirestore.js';

const ImageGride = () => {
    const { docs } = useFirestore('images')
    console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                
            )}
        </div>
    )
}

export default ImageGride
