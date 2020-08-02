import React, {useState, useEffect} from 'react'
import { projectStorage } from '../../firbase/config'

const useStorage = (file) =>{
    const [progress, setProgress] = useState();
    const [error, setError] = useState();
    const [url, setUrl] = useState();
    return (
        <div>
            <projectStorage />
        </div>
    )
}
export default  useStorage;