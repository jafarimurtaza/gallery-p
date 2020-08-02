import React from 'react'
import useFireStore from './hooks/UseFireStores.js';

const ImageGride = () => {
    const { docs } = UseFireStores('images')
    console.log(docs);
    return (
        <div>
            images
        </div>
    )
}

export default ImageGride
