import styled from 'styled-components';
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export const Topo = styled.section`
  h1 {
    font-size: 40px;
    padding: 90px 30px 30px;
  }

  p {
    padding-left: 30px;
    text-align: justify;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 30px 30px;
`;
