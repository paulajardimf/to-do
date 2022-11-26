import styled from "styled-components";

export const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background {
    height: 35rem;
    width: 40rem;
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #fff0f0 0%, #b18597 100%);
    border-radius: 7px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .input {
    display: flex;
    gap: 20px;
    margin: 40px 0;
  }

  input {
    border: none;
    width: 19rem;
    background-color: transparent;
    font-size: 1rem;
    color: #382b22;
    border-bottom: 1px solid #382b22;
  }
  input:focus {
    outline: none;
  }

  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-family: inherit;
    font-size: 0.735rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #382b22;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: #fff0f0;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    /* -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2; */
    /* box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2; */
    -webkit-transform: translate3d(0, 0.75em, -1em);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button:hover {
    background: #ffe9e9;
    -webkit-transform: translate(0, 0.25em);
    transform: translate(0, 0.25em);
  }

  button:hover::before {
    /* -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2; */
    /* box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2; */
    -webkit-transform: translate3d(0, 0.5em, -1em);
    transform: translate3d(0, 0.5em, -1em);
  }

  button:active {
    background: #ffe9e9;
    -webkit-transform: translate(0em, 0.75em);
    transform: translate(0em, 0.75em);
  }

  button:active::before {
    /* -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2; */
    /* box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2; */
    -webkit-transform: translate3d(0, 0, -1em);
    transform: translate3d(0, 0, -1em);
  }

  img {
    position: absolute;
    width: 50rem;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 31rem;
    min-height: 4rem;
    border-radius: 10px;
    padding: 0 35px;
    margin: 20px 0;
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 1px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


    p {
      color: #382b22;
    }
  }

  .image-delete {
    width: 1rem;
  }

  hr{
    margin: 0 35px;
  }
`;
