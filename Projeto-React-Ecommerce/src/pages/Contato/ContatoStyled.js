import styled from "styled-components";
export const Container = styled.div`
  background-color: #131315;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 1.5rem;
  padding-top: 0;
  transform: translate(-50%, -50%);
  background: #242026;
  box-shadow: 0 15px 25px rgba(143, 124, 236, 0.7);
  border-radius: 10px;
  margin-top: 35px;

  textarea {
    height: 8rem;
    width: 100%;
  }

  h2 {
    height: 20%;
    margin: 1rem;
    top: 0;
    position: static;
    color: #fff;
    text-align: center;
  }

  .user-box {
    &:first-child input {
      margin-top: 0.5rem;
    }
  }

  .user-box input {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .user-box label {
    position: relative;
    left: 0;
    top: -60px;
    padding: 0.125rem 0;
    font-size: 1rem;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .user-box input:not(:placeholder-shown) ~ label {
    top: -85px;
    left: 0;
    color: #8f7cec;
    font-size: 0.75rem;
  }
`;
