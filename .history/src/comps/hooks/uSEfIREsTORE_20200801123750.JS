import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../../firbase/config'

const useFireStore = (collection) => {
    const [docs, setDocs ] = useState([]);

    useEffect (() => {
        projectFirestore.collection(collection);
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push()
            })
        })
    }, [collection])
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
