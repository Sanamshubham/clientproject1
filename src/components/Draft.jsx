import React, { useState } from 'react';
//import './Draft.css';

const Draft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/src/assets/images/main.jpeg',
    '/src/assets/images/image1.jpeg',
    '/src/assets/images/image8.jpeg',
    '/src/assets/images/image3.jpeg',
    '/src/assets/images/image4.jpeg',
    '/src/assets/images/image5.jpeg',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="photo-gallery" id='Draft'>
      {images.map((image, index) => (
        <div key={index} className="photo-item" onClick={() => openModal(image)}>
          <img src={image} alt={`Photo ${index + 1}`} className="photo" />
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full Screen" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Draft;
