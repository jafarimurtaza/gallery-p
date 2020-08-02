import React, {useEffect} from 'react';
import {motion } from 'framer-motion';
import useStorage from './hooks/useStorage';


const ProgressBar = ({file, setFile}) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);

        return (
            <motion.div className="progress-bar">
            initail={{ with: 0}}
            animate={{ with: progress + '%' }}
            </motion.div>
        )
}

export default ProgressBar
