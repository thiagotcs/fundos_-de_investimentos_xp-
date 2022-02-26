import styled from 'styled-components';
export const Container = styled.div`
  width: 300px;
  height: 3rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: #fff;
  border: 1px solid #666;
  padding: 0 0.6rem;
  font: 1.2rem Roboto;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    background: transparent;
    border: 0;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #9c98a6;
    }
    :-ms-input-placeholder {
      color: #9c98a6;
    }
  }
`;
