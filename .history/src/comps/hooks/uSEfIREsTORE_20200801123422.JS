import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../../firbase/config'
import useStorage from './useStorage'

const useFireStore = (collection) => {
    const [docs, setDocs ] = useStorage
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
