import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  width: 100%;
  margin: auto;
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #eaf3ec;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    min-height: auto;
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 430px;
    height: 300px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2), 0px 6px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: 900px) {
      width: 100%;
      max-width: 380px;
      height: auto;
    }

    @media (max-width: 480px) {
      max-width: 320px;
    }
  }
`;

export const DivDescription = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 900px) {
    align-items: center;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #3b5240;
  font-weight: bold;
  font-family: "Bellota", Sans-serif;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  color: #3b5240;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 2rem;
  max-width: 500px;

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    max-width: 90%;
  }
`;
