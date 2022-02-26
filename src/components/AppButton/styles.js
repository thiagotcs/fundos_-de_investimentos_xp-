import styled from 'styled-components';
export const Container = styled.button`
  font-size: 16px;
  color: #121212;
  background-color: #ffc709;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  + button {
    margin-left: 20px;
  }
`;
