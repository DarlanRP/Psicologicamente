import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 580px;
  background-color: #eaf3ec;
  border-bottom: 8px solid #307424;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
`;

export const ContainerAbout = styled.div`
  width: 100%;
  max-width: 1100px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImgAbout = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 450px;
    height: auto;
  }

  @media (max-width: 600px) {
    > img {
      max-width: 300px;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > h3 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 300;
    color: #2f4f4f;
    border-bottom: 1.5px solid #2f4f4f;
    padding-bottom: 4px;
    width: fit-content;

    @media (max-width: 900px) {
      margin: 0 auto;
    }
  }

  > h1 {
    font-family: "Bellota", sans-serif;
    color: #4f5d4e;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;

    @media (max-width: 900px) {
      text-align: center;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: "Bellota", sans-serif;
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    font-weight: 800;
    color: #2f4f4f;

    > svg {
      background: #6b8e23;
      color: ${(props) => props.theme.colors["light-green"]};
      border-radius: 50%;
      padding: 5px;
    }

    @media (max-width: 900px) {
      justify-content: center;
      margin-right: 16px;
    }
  }
`;

export const SectionBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 5px;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: "Bellota", sans-serif;
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    font-weight: 800;
    color: #2f4f4f;

    > svg {
      background: #6b8e23;
      color: ${(props) => props.theme.colors["light-green"]};
      border-radius: 50%;
      padding: 5px;
    }

    @media (max-width: 900px) {
      justify-content: center; /* centraliza ícone + texto juntos no mobile */
      text-align: center;
    }
  }

  > p {
    color: #4f5d4e;
    line-height: 1.6;
    max-width: 500px;

    @media (max-width: 900px) {
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export const Formation = styled(SectionBase)`
  margin-top: 10px;

  span {
    @media (max-width: 900px) {
      margin-left: 24px;
      margin-top: 1rem;
    }
  }
`;

export const CurrentActivities = styled(SectionBase)`
  margin-top: 1rem;
  span {
    @media (max-width: 900px) {
      margin-top: 1rem;
      margin-right: 10px;
    }
  }
`;
