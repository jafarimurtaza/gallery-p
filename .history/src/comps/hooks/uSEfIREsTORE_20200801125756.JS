import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../../firbase/config'

const useFireStore = (collection) => {
    const [docs, setDocs ] = useState([]);

    useEffect (() => {
      const unsub =  projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id });
            });
            setDocs(documents)
        });

        return () =
    }, [collection])
  return (
    <div>
      <projectFirestore/>
    </div>
  )
}

export default useFireStore
