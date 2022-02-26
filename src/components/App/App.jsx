import React from 'react';
import GlobalStyle from '../../styles/global';
import { AppContainer } from '../AppContainer/AppContainer';
import { Sidebar } from '../Sidebar';
import { Wrapper } from './styles';
export function App() {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <AppContainer />
        <GlobalStyle />
      </Wrapper>
    </>
  );
}
