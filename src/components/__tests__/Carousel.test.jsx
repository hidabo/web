import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Carousel from '../Carousel.jsx';

describe('Carousel', () => {
  const images = ['/img/one.jpg', '/img/two.jpg'];

  it('renders provided images and Swiper root', () => {
    render(<Carousel images={images} />);
    images.forEach((_, idx) => {
      expect(screen.getByAltText(`Slide ${idx + 1}`)).toBeInTheDocument();
    });
    expect(document.querySelector('.swiper')).toBeInTheDocument();
  });
});
