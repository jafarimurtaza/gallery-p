import React from 'react'

const ImageGride = () => {
    const { docs } = useFireStore('images')
    return (
        <div>
            Images
        </div>
    )
}

export default ImageGride
