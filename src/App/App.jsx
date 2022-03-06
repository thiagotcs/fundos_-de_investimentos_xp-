import React from 'react';
import GlobalStyle from '../styles/global';
import { AppContainer } from '../components/AppContainer';
import { AppSideSheet } from '../components/AppSideSheet';
import { Sidebar } from '../components/Sidebar';
import { Wrapper } from './styles';
import '../mocks';
export function App() {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <AppContainer />
        <AppSideSheet />
        <GlobalStyle />
      </Wrapper>
    </>
  );
}
