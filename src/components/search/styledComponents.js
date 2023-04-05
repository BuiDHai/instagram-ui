import styled from 'styled-components';
import search from '../../assets/icons/search.svg';

const Input = styled.input`
  background-color: rgb(38, 38, 38);
  border-radius: 8px;
  color: #fff;
  height: 40px;
  padding: 3px 16px 3px 40px;
  outline: none;
  box-shadow: none;
  width: 100%;
  transition: padding 0.2s;
  &:focus {
    padding-left: 16px;
    + .icon-search {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
const StyleSearch = styled.div`
  border-radius: 0 20px 20px 0;
  border-right: 1px solid rgb(38, 38, 38);
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  width: var(--search-width);
  height: 100dvh;
  padding: 8px 0;
  position: absolute;
  top: 0;
  left: var(--header-width);
`;
const SearchHead = styled.div`
  border-bottom: 1px solid rgb(38, 38, 38);
  padding: 20px 16px 24px;
`;
const SearchHeadTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 25px;
`;
const SearchForm = styled.div`
  position: relative;
  .icon-search {
    background: url(${search}) no-repeat center center;
    background-size: contain;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: opacity 0.3s;
  }
`;
const SearchResult = styled.div`
  max-height: calc(100dvh - 162px);
  overflow-y: auto;
`;
const SearchResultTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  padding: 25px 24px 15px;
`;

export {
  Input,
  StyleSearch,
  SearchHead,
  SearchHeadTitle,
  SearchForm,
  SearchResult,
  SearchResultTitle,
};
