import React from 'react';
import {motion } from 'framer-motion';


const  Modal = ({selectedImg, setSelectedImg }) =>{
   const handleClick = (e) => {
       if(e.target.classList.contains('backdrop')){
           setSelectedImg(null);
       }
    }
    return (
        <motiondiv className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
            
        </motiondiv>
    )
}

export default Modal
