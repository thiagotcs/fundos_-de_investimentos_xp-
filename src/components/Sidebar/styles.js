import styled from 'styled-components';
export const Wrapper = styled.aside`
  width: 390px;
  height: 100vh;
  background-color: #121212;
  overflow-x: hidden;
  padding: 24px 32px;
  position: fixed;
  top: 0;
  color: #fff;
`;

export const Topo = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    padding-right: 10px;
  }

  img {
    height: 29px;
  }
`;
