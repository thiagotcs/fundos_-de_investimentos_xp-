import React from 'react';
import GlobalStyle from '../styles/global';
import { AppContainer } from '../components/AppContainer/AppContainer';
import { AppSideSheet } from '../components/AppSideSheet/AppSideSheet';
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
