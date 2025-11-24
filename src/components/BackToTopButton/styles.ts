import styled from "styled-components";

export const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  background: #557a46;
  color: #f7f7f7;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};

  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};

  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(10px)"};

  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    background: #6b9156;
  }
`;
