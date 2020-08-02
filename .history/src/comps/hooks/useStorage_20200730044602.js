import React, {useState, useEffect} from 'react'
import { projectStorage } from '../../firbase/config'

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        return () => {
            // 
        }
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file)
    }, [file])

    return (
        <div>
            <projectStorage />
        </div>
    )
}
export default  useStorage;