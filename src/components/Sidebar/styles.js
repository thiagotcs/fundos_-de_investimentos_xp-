import styled from 'styled-components';
export const Wrapper = styled.aside`
  width: 390px;
  height: 100vh;
  background-color: #121212;
  overflow-x: hidden;
  padding: 24px 32px;
  top: 0;
  color: #fff;
`;

export const Topo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    padding-right: 10px;
  }
  img {
    width: 39px;
    height: 39px;
    margin-right: 18px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;

  li {
    position: relative;
    font-size: 14px;
    list-style: none;
    width: 100%;
    padding: 20px 0;

    a {
      display: block;
      font-size: inherit;
      color: inherit;
      text-decoration: none;
      text-align: left;
      padding: 0.7rem 1rem;

      &:hover {
        color: #000;
        font-weight: bold;
      }
    }

    button {
      color: inherit;
      font-size: inherit;
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 100%;
      text-align: left;
      padding: 0.7rem 1rem;
      display: flex;
      align-items: center;
      font-size: 20px;
      transition: background-color 0.2s;

      &:hover {
        background-color: #ffc709;
        color: #000;
        font-weight: bold;
      }
      svg {
        margin-right: 10px;
        width: 20px;
        height: 20px;

        & + svg {
          font-size: 25px;
          margin-left: auto;
        }
      }
    }
  }
`;
export const Uldropdown = styled.ul`
  display: block;

  li {
    position: relative;
    font-size: 14px;
    list-style: none;
    width: 100%;
    padding: 10px 0 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    transition: background-color 0.2s;

    a {
      display: flex;
      align-items: center;
    }

    &:hover {
      background-color: #ffc709;
      color: #000;
      font-weight: bold;
    }

    svg {
      margin-right: 10px;
      font-size: 20px;
    }
  }

  .show {
    display: block;
  }
`;
