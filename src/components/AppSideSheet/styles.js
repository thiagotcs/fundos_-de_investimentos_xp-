import styled from 'styled-components';
export const Container = styled.form`
  padding: 30px;
  .sideSheetClose {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
  }

  h2 {
    color: #121212;
    font-size: 25px;
  }
  p {
    margin-top: 30px;
  }
  section {
    display: flex;

    div {
      width: 260px;
      margin-right: 20px;
      margin-bottom: 20px;

      input {
        width: 100%;
      }
    }
  }
`;

export const DistributionContainer = styled.div`
  section {
    display: flex;

    div {
      width: 166px;
      margin-right: 20px;
      margin-bottom: 20px;

      input {
        width: 100%;
      }
    }
  }
  .sideSheetButton {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1.5rem;
    right: 10%;
  }
  button {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 30px;

  .sideSheetClose {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
  }
  h2 {
    color: #121212;
    font-size: 25px;
  }
  span {
    margin-top: 30px;
    font-weight: bold;
    display: block;
  }
  p {
    margin-top: 30px;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    padding-top: 30px;

    th {
      color: #121212;
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.6rem;
      border-top: 1px solid #121212;
      border-bottom: 1px solid #121212;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
    }
  }
`;
