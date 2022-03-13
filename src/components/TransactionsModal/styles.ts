import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    & + input {
      margin-top: 1rem;
    }
    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    border-radius: 0.25rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
    transition: filter 0.6s;
    margin-top: 1.5rem;
    &:hover {
      filter: brightness(0.9);
    }
    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

/*
 * Interfaces for RadioBox styled components
 */

interface RadioBoxPros {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxPros>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background-color: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};
  &:hover {
    border-color: #aaa;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
