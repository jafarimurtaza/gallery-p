import React from 'react'
import useFireStore from './hooks/useF.JS';

const ImageGride = () => {
    const { docs } = useFireStore('images')
    console.log(docs);
    return (
        <div>
            <useFireStore />
        </div>
    )
}

export default ImageGride
