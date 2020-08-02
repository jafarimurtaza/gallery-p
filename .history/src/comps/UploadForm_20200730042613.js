import React , { useState } from 'react'

const UploadForm = () => {
            const changeHandler = (e) => {
            const [file, setFile] = useState(null);
            const [error, setError] = 

            const types = ['image/png', 'image/jpeg'];
            let selected = e.target.files[0];
            //    console.log(selected);
            if(selected && types.includes(selected.type)) {
            setFile(selected)
            } else {
                setFile(null)
            }
    }
        return (
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        )
    }
export default UploadForm