import styled from "styled-components";

export const MetricsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 120px;
  background: ${(props) => props.theme.colors["green-header"]};
  color: ${(props) => props.theme.colors["light-green"]};
  font-size: clamp(1.1rem, 1.8vw, 1.2rem);
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (max-width: 424px) {
    font-size: 1rem;
    span {
      font-size: 0.85rem;
    }
  }
`;
