import React from 'react'
import useStorage from './hooks/useStorage'

const ProgressBar = ([file, setFile]) => {
    const { url, progress } = useStorage(file);
    console.log();

        return (
            <div className="progress-bar">
                Progresse
            </div>
        )
}

export default ProgressBar
