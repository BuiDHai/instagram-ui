import React from 'react';
import styled from 'styled-components';
import {
  StyledSlideList,
  SlideItemImage,
  SlideItemVideo,
} from '../slide/styledComponents';

import SlideList from '../slide/SlideList';

const MediaList = styled.div`
  display: block;
`;

const ShowFile = ({ contentList }) => {
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
    <MediaList>
      {contentList.length === 1 ? (
        <StyledSlideList>{showTagHtml(contentList[0])}</StyledSlideList>
      ) : (
        <SlideList slides={contentList}></SlideList>
      )}
    </MediaList>
  );
};

export default ShowFile;
