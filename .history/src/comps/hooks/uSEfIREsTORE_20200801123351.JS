import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../../firbase/config'

const useFireStore = (collection) => {
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
