import React, { useState } from 'react';
import Slide from './Slide';

import {
  SlideWrap,
  StyledSlideList,
  SlideItemImage,
  SlideItemVideo,
  SlideArrows,
  SlideArrowNext,
  SlideArrowPrev,
  SlideDots,
  SlideDotItem,
} from './styledComponents';

const SlideList = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    currentSlide === slides.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(slides.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const showTagHtml = (filename) => {
    const imageType = [
      'jpg',
      'jpeg',
      'gif',
      'png',
      'bmp',
      'tif',
      'tiff',
      'eps',
    ];
    const videoType = ['mp4', 'mov', 'wmv', 'avi'];
    const fileType = filename.split('.').pop();

    if (imageType.includes(fileType))
      return <SlideItemImage src={filename} alt='' />;
    if (videoType.includes(fileType))
      return (
        <SlideItemVideo autoplay muted>
          <source src={filename} type={'video/' + fileType}></source>
        </SlideItemVideo>
      );
  };

  return (
    <SlideWrap>
      <StyledSlideList>
        {slides.map((slide, index) => (
          <Slide key={index} isActive={currentSlide === index}>
            {showTagHtml(slide)}
          </Slide>
        ))}
      </StyledSlideList>
      <SlideArrows>
        <SlideArrowPrev className='prev' onClick={prevSlide}>
          <span>Prev</span>
        </SlideArrowPrev>
        <SlideArrowNext className='next' onClick={nextSlide}>
          <span>Next</span>
        </SlideArrowNext>
      </SlideArrows>
      <SlideDots>
        {slides.map((slide, index) => (
          <SlideDotItem
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </SlideDots>
    </SlideWrap>
  );
};

export default SlideList;
