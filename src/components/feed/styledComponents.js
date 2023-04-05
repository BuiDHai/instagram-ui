import styled from 'styled-components';

const StyledFeed = styled.div`
  border-bottom: 1px solid rgb(38, 38, 38);
  display: block;
  margin-bottom: 12px;
  padding-bottom: 20px;
`;
const FeedContent = styled.div`
  display: block;
`;
const FeedFoot = styled.div`
  display: block;
`;
const FeedHead = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const HeadButton = styled.button`
  background: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  padding: 0;
  text-align: center;
  img {
    width: 15px;
    margin: 0 auto;
  }
`;
const HeadUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const HeadUserAvatar = styled.figure`
  border-radius: 50px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  overflow: hidden;
`;
const HeadUserInfo = styled.div`
  display: block;
`;
const HeadUserInfoName = styled.p`
  display: flex;
  color: #a8a8a8;
  span {
    &:not(:last-child) {
      margin: 0 5px;
    }
  }
`;
const HeadUserInfoLink = styled.a`
  color: #fff;
  font-weight: 600;
  transition: color: 0.3s;
  &:hover {
    color: #a8a8a8;
  }
`;
const HeadUserInfoText = styled.p`
  color: #f5f5f5;
  font-size: 12px;
`;

export {
  StyledFeed,
  FeedContent,
  FeedFoot,
  FeedHead,
  HeadButton,
  HeadUser,
  HeadUserAvatar,
  HeadUserInfo,
  HeadUserInfoName,
  HeadUserInfoLink,
  HeadUserInfoText,
};
