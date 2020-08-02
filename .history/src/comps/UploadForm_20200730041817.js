import React  from 'react'

const UploadForm = () => {
   const changeHandler = (e) => {
       let selected = e.tar
   }
        return (
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        )
    }
export default UploadForm