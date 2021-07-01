import React, { useState } from 'react';

const UploadForm = () => {
 const [file,setFile]=useState(null);
 const [error,setError]=useState(null)
//Type of files
   const types = ['image/png', 'image/jpeg'];
  const handleChange=(e)=>{
    let selected=e.target.files[0]
    //pick up the first file 
    console.log(selected);
    if(selected && types.includes(selected.type)){
        setFile(selected)
    }else{
        setFile(null)
        setError('Please select an image file');
    }
  }

  return (
    <form>
      <label>
       
        <input type="file"  onChange={handleChange}/>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
}

export default UploadForm;