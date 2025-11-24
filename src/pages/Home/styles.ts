import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

/* Container principal */
export const Container = styled.main`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-bottom: 8px solid #307424;
  display: flex;
  margin-top: -20px;
  width: 100%;
  overflow: hidden;
`;

export const ContentHome = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  min-height: 520px;
  align-items: center;
  padding: 2.5rem 2rem;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem 1.2rem;
    min-height: auto;
  }
`;

/* Coluna de texto */

export const Hero = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  z-index: 3;

  > span {
    font-family: "Bellota", Sans-serif;
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    font-weight: 400;
    line-height: 1.6;
    color: #2e2e2e;
    padding-bottom: 1.25rem;
    margin-top: 0.6rem;
  }

  @media (max-width: 900px) {
    margin: 1.5rem auto 0;
    align-items: center;
  }
`;

export const Preview = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%;
  max-width: 480px;
  min-width: 280px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1;

  > img {
    height: auto;
    max-height: 470px;
    width: auto;
    max-width: 370px;
    object-fit: cover;
    display: block;
    transition: opacity 0.45s ease, transform 0.35s ease;
  }

  /* reduzir visibilidade em tablets */
  @media (max-width: 900px) {
    width: 60%;
    > img {
      opacity: 0.6;
      transform: translateY(50px) scale(0.82);
      max-height: 420px;
    }
  }

  /* sumir em telas pequenas */
  @media (max-width: 700px) {
    > img {
      opacity: 0;
      transform: translateY(40px) scale(0.9);
      pointer-events: none;
    }
  }

  /* em celulares bem pequenos, remove todo o container pra evitar espaço vazio */
  @media (max-width: 420px) {
    display: none;
  }
`;

export const TitleLg = styled.h1`
  font-family: "Parisienne", Sans-serif;
  color: #307424;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  position: relative;
  display: inline-block;
  line-height: 1.1;
  margin-bottom: 1rem;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #307424;
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    font-size: clamp(2.5rem, 6vw, 3rem);
    &::after {
      bottom: -5px;
    }
  }

  @media (max-width: 425px) {
    font-size: clamp(1.9rem, 8vw, 3.5rem);
    &::after {
      bottom: -4px;
    }
  }
`;

export const TitleMd = styled.h2`
  padding: 0.9rem 0;
  font-family: "Roboto Slab", Sans-serif;
  font-size: clamp(1.2rem, 1.8vw, 1.9rem);
  font-weight: 500;
  color: #333333;
  line-height: 1.25;

  @media (max-width: 425px) {
    font-size: clamp(1.1rem, 3.5vw, 1.8rem);
  }
`;
