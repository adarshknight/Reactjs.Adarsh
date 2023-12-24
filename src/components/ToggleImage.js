import React, { useState } from 'react';

const ToggleImage = () => {
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1((prevShowImage1) => !prevShowImage1);
  };

  return (
    <div onClick={toggleImage} className="pro">
      <h1>"Image Toggle When Clicked"</h1>
      {showImage1 ? (
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
          alt="Image 1" 
        />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_640.jpg"
          alt="Image 2"
        />
      )}
    </div>
  );
};

export default ToggleImage;