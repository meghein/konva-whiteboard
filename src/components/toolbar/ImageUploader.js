import React, { createRef, useState } from 'react';

export default function ImageUploader() {  
  const [image, setImage] = useState()
  const fileUploadEl = createRef();

  const addImage = () => {
    fileUploadEl.current.click();
  };

  const fileChange = event => {
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener("load", () => {
      console.log(reader.result)
      setImage(reader.result)
    });
  };

  return (
    <>
      <button onClick={addImage}>Add Image</button>
      <input
        type="file"
        ref={fileUploadEl}
        onChange={fileChange}
        style={{display: "none"}}
      />
      <img src={image}/>
    </>
  );
}