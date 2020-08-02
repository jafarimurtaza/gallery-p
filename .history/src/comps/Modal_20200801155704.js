import React from 'react'

const  Modal = ({selectedImg, selectedImg }) =>{
    handleClick = (e) => {
        selectedImg(nu)
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
            
        </div>
    )
}

export default Modal
