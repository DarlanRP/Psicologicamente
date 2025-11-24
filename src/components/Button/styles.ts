import styled from "styled-components";

interface ButtonStyleProps {
  mt?: string;
}

export const ButtonContainer = styled.a<ButtonStyleProps>`
  margin-top: ${(props) => props.mt || "0"};
  background: #557a46;
  color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17rem;
  height: 3rem;
  border-radius: 35px;
  border: 0;
  cursor: pointer;
  gap: 8px;
  font-size: 1rem;
  padding: 0 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #6b9156;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    width: 16rem;
    height: 2.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    width: 15.5rem;
    height: 2.7rem;
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;
