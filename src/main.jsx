import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './components/Carousel.jsx';

// Importar las imágenes para que Vite genere las rutas correctas en producción
import foto1 from '../img/foto1.jpeg';
import foto2 from '../img/foto2.jpeg';
import foto3 from '../img/foto3.jpeg';
import foto4 from '../img/foto4.jpeg';
import foto5 from '../img/foto5.jpeg';
import foto6 from '../img/foto6.jpeg';
import foto7 from '../img/foto7.jpeg';
import foto8 from '../img/foto8.jpeg';

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
];

ReactDOM.createRoot(document.getElementById('carousel-root')).render(
  <React.StrictMode>
    <Carousel images={images} />
  </React.StrictMode>
);
