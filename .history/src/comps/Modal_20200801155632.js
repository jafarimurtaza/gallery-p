import React from 'react'

const  Modal = ({selectedImg, selectedImg }) =>{
    return (
        <div className="backdrop" onClick={handel}>
            <img src={selectedImg} alt="enlarged pic" />
            
        </div>
    )
}

export default Modal
