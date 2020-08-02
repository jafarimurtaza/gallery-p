import React from 'react'
import UseFireStores from './hooks/UseFireStores.js';

const ImageGride = () => {
    const { docs } = UseFireStores('images')
    console.log(docs);
    return (
        <div className="imge">
            images
        </div>
    )
}

export default ImageGride
