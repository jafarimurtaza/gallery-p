import React, {useState, } from 'react'
import { projectFirestore } from '../../firbase/config'

const useFireStore = () => {
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
