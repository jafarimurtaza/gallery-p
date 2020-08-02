import React, {useState, useEffect} from 'react'
import { projectStorage } from '../../firbase/config'

const useStorage = () =. {
    return (
        <div>
            <projectStorage />
        </div>
    )
}
export default  useStorage;