import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ photosData }) => {
  console.log('photosData', photosData);
  return (
    <ImageGalleryList>
      {photosData.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          smallPhoto={photo.webformatURL}
          alt={photo.tags}
          info={photo}
        />
      ))}
    </ImageGalleryList>
  );
};
