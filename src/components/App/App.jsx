import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { AppContainer } from '../AppContainer/AppContainer';
import { AppSideSheet } from '../AppSideSheet/AppSideSheet';
import { Sidebar } from '../Sidebar';
import { Wrapper } from './styles';
import '../mocks';
export function App() {
  const [openSideSheet, setOpenSideSheet] = useState(false);
  const [openSideSheetEdit, setOpenSideSheetEdit] = useState(false);

  function handleOpenSideSheet() {
    setOpenSideSheet(true);
  }

  function handleOpenSideSheetEdit() {
    setOpenSideSheetEdit(true);
  }

  function handleCloseSideSheet() {
    setOpenSideSheet(false);
  }

  function handleCloseSideSheetEdit() {
    setOpenSideSheetEdit(false);
  }

  return (
    <>
      <Wrapper>
        <Sidebar />
        <AppContainer
          onOpenSideSheet={handleOpenSideSheet}
          onOpenSideSheetEdit={handleOpenSideSheetEdit}
        />
        <AppSideSheet
          isOpen={openSideSheet}
          isOpenEdit={openSideSheetEdit}
          onCloseSideSheet={handleCloseSideSheet}
          onCloseSideSheetEdit={handleCloseSideSheetEdit}
        />
        <GlobalStyle />
      </Wrapper>
    </>
  );
}
