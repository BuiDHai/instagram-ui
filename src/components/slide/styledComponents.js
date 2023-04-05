import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SlideWrap = styled.div`
  position: relative;
`;
const StyledSlideList = styled.div`
  position: relative;
  padding-top: 125%;
`;
const SlideItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  animation: 1s ${fadeOut} ease-out;
  &.active {
    animation: 1s ${fadeIn} ease-out;
    z-index: 2;
    opacity: 1;
  }
`;
const SlideItemImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const SlideItemVideo = styled.img`
  width: 100%;
  height: auto;
`;
const SlideArrows = styled.div`
  display: block;
`;
const SlideArrowNext = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-indent: 50px;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  span {
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    left: 45%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
const SlideArrowPrev = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-indent: 50px;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  span {
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
const SlideDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 10px;
  z-index: 10;
`;
const SlideDotItem = styled.span`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
  width: 8px;
  height: 8px;
  transition: background 0.3s;
  margin: 0 5px;
  &.active {
    background: #fff;
  }
`;

export {
  SlideWrap,
  StyledSlideList,
  SlideItem,
  SlideItemImage,
  SlideItemVideo,
  SlideArrows,
  SlideArrowNext,
  SlideArrowPrev,
  SlideDots,
  SlideDotItem,
};
