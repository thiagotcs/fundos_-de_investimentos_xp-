import React from 'react';
import GlobalStyle from '../../styles/global';
import { AppContainer } from '../AppContainer/AppContainer';
import { AppSideSheet } from '../AppSideSheet/AppSideSheet';
import { Sidebar } from '../Sidebar';
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
