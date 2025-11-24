import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 550px;
  background-color: #eaf3ec;
`;

export const ServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 900px;

  h3 {
    font-size: 2.5rem;
    color: #4f5d4e;
    font-weight: bold;
    font-family: "Bellota", Sans-serif;
  }
`;

export const IconDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 12px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1.5px;
    background-color: #4f5d4e;
    max-width: 400px;
  }

  svg {
    color: #4f5d4e;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    max-width: 300px;
  }
`;

export const ServicesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
  padding: 3rem 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ServiceCard = styled.div<{ middle?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 0 2rem;
  position: relative;
  overflow: visible;
  transition: transform 0.3s ease;

  ${({ middle }) =>
    middle &&
    css`
      border-left: 1px solid #e8e4e2;
      border-right: 1px solid #e8e4e2;

      @media (max-width: 900px) {
        border: none;
      }
    `}

  svg {
    width: 100px;
    height: 100px;
    transition: transform 0.4s ease;
  }

  &:hover svg {
    transform: translateY(-8px);
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 1.2rem;
    color: #2f4f4f;
    font-weight: 500;
  }

  p {
    color: #4f5d4e;
    line-height: 1.6;
    max-width: 300px;

    @media (max-width: 900px) {
      font-size: 0.95rem;
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }

    @media (max-width: 400px) {
      font-size: 0.85rem;
    }
  }

  h3::after {
    content: "";
    display: block;
    width: 40%;
    height: 1.5px;
    background-color: #4f5d4e;
    margin: 0.8rem auto 0;
  }
`;
