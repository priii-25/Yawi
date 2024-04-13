import React, { useState } from "react";

function AvatarSelector({ images, onSelect, image }) {
 const [isDropdownVisible, setIsDropdownVisible] = useState(false);

 const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
 };

 const handleImageClick = (image) => {
    onSelect(image);
    setIsDropdownVisible(false);
 };

 return (
    <div className="avatar-selector" onClick={toggleDropdown}>
      {image ? (
        <img src={image.src} alt={image.alt} className="selected-image" />
      ) : (
        <div className="placeholder">Select an avatar</div>
      )}
      {isDropdownVisible && (
        <div className="dropdown-menu">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="dropdown-item"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}
    </div>
 );
}

export default AvatarSelector;
