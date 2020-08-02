import React from 'react'
import useFireStore from './hooks/uSEfIREsTORE.JS'

const ImageGride = () => {
    const { docs } = useFireStore()
    return (
        <div>
            Images
        </div>
    )
}

export default ImageGride
