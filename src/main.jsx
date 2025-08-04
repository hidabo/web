import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './components/Carousel.jsx';

const images = [
  '/img/foto1.jpeg',
  '/img/foto2.jpeg',
  '/img/foto3.jpeg',
  '/img/foto4.jpeg',
  '/img/foto5.jpeg',
  '/img/foto6.jpeg',
  '/img/foto7.jpeg',
  '/img/foto8.jpeg',
];

ReactDOM.createRoot(document.getElementById('carousel-root')).render(
  <React.StrictMode>
    <Carousel images={images} />
  </React.StrictMode>
);
