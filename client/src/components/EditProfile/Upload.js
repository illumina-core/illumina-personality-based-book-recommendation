import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

function App() {
  const maxNumber = 69;
  const onChange = imageList => {
    // data for submit
    console.log(imageList);
  };
  return (
    <div className="App">
      <ImageUploading multiple onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          
          <div className="upload__image-wrapper" >
              {imageList.map(image => (
              <div key={image.key} className="image-item" style={{paddingBottom:'10px'}}>
                <img src={image.dataURL} alt="img" width="80" height="80"  className="rounded img" style={{border: '2px solid white'}}/>
              </div>
            ))}
            <button onClick={onImageUpload} style={{backgroundColor:'white', color:'black'}}>Upload Image</button>&nbsp;
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App