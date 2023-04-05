import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
// import Search from './components/search/Search';

import styled from 'styled-components';

const StyledRoot = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  width: 100%;
`;

function App() {
  return (
    <StyledRoot>
      <Header />
      <Main />
    </StyledRoot>
  );
}

export default App;
