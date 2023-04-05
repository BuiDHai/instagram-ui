import React from 'react';

import { SlideItem } from './styledComponents';

const Slide = (props) => {
  return (
    <SlideItem className={props.isActive ? 'active' : ''}>
      {props.children}
    </SlideItem>
  );
};

export default Slide;
