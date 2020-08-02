import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../../firbase/config'

const useFireStore = (colliction) => {
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
