import React from 'react'

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
