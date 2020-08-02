import React  from 'react'

const UploadForm = () => {
   const changeHandler = (e) => {
       const [files, setFile] = const [state, setstate] = useState(initialState)
       let selected = e.target.files[0];
       console.log(selected);
   }
        return (
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        )
    }
export default UploadForm