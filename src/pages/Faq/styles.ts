import styled from "styled-components";

export const FaqContainer = styled.section`
  background: radial-gradient(
    circle at center,
    #c3d6c3 0%,
    #a5c0a5 65%,
    #718f70 100%
  );
`;

export const FaqContainerItem = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #3b5240;
  font-weight: bold;
  font-family: "Bellota", Sans-serif;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
