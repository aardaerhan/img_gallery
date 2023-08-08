import React , {useState} from "react";
import './App.css';
import images from "./Images";


function App() {

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected"/>
      </div>
      <div className="imgContainer">
        {images.map((img,index) => (
          <img key={index} src={img} alt="view"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
