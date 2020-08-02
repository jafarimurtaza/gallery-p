import React, {useState, useEffect} from 'react'
import { projectStorage } from '../../firbase/config'

const useStorage = (file) =>{
    return (
        <div>
            <projectStorage />
        </div>
    )
}
export default  useStorage;