import { useState, useEffect } from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import '../styles/ImageCarousel.css';

export default function ImageCarousel() {
  const images = [
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImg]);

  const nextSlide = () => {
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="image-carousel">
      <img src={images[currentImg]} alt="Image Carousel" className="image-carousel-image" />
      <button 
        className="image-carousel-arrow-button image-carousel-back-arrow-button" 
        onClick={prevSlide}
      >
        <ArrowBackIosOutlinedIcon className="image-carousel-arrow-icon" />
      </button>
      <button 
        className="image-carousel-arrow-button image-carousel-forward-arrow-button" 
        onClick={nextSlide}
      >
        <ArrowForwardIosOutlinedIcon className="image-carousel-arrow-icon" />
      </button>
    </div>
  )
}
