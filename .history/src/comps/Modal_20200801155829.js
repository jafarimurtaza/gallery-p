import React from 'react'

const  Modal = ({selectedImg, electedImg }) =>{
   const handleClick = (e) => {
        selectedImg(null);
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
            
        </div>
    )
}

export default Modal
