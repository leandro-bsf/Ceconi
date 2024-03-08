
import './estilo.css';
import React, { useState } from 'react';
import imagem1 from  './imagem/1.jpg'
import imagem2 from  './imagem/2.jpeg'
import imagem3 from  './imagem/3.png'
import imagem4 from  './imagem/4.png'
import imagem5 from  './imagem/5.jpeg'

function App() {

   const  images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5
   ];
   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };
  return (
    <container className="App">
     
      <div className="image-gallery">
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={Imagem ${index + 1}}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="arrow left" onClick={(e) => {e.stopPropagation(); handlePrevImage()}}>&#9664;</span>
          <img src={images[selectedImageIndex]} alt={Imagem ${selectedImageIndex + 1}} />
          <span className="arrow right" onClick={(e) => {e.stopPropagation(); handleNextImage()}}>&#9654;</span>
        </div>
      )}
   
    </container>
    
  );
}

export default App;