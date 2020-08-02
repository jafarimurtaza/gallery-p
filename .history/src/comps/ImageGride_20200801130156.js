import React from 'react'
import useFireStore from './hooks/UseFireStore.JS'

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
