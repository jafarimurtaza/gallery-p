import React from 'react'
import useStorage from './hooks/useStorage'

const ProgressBar = ({file, setFile}) => {
    const { url, progress } = useStorage(file);
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [])
        return (
            <div className="progress-bar" style={{with: progress + '%' }}>
            
            </div>
        )
}

export default ProgressBar
