import React, {useEffect} from 'react';
import {motion } from 'framer-motion'
import useStorage from './hooks/useStorage'

const ProgressBar = ({file, setFile}) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);

        return (
            <div className="progress-bar" style={{with: progress + '%' }}>
            
            </div>
        )
}

export default ProgressBar
