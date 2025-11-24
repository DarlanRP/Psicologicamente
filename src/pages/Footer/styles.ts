import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 2rem 0;
  background-color: #eaf3ec;
  min-height: 790px;
`;

export const FooterContent = styled.div`
  max-width: 800px;
  margin: auto;

  @media (max-width: 600px) {
    padding: 0 1.2rem;
  }
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 180px;
    width: 180px;
    user-select: none;
  }
  &::after {
    content: "";
    display: block;
    margin-top: 20px;
    width: 60%;
    height: 1px;
    background-color: #7a857a;
  }
`;

export const DivContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    border-bottom: 1px solid #cfd9d3;
    font-size: 1.3rem;
    padding-bottom: 0.4rem;
    margin-bottom: 1rem;
    font-family: "Bellota", Sans-serif;
    font-weight: bold;
    color: #2e3d33;
    width: fit-content;
    display: inline-block;
  }

  span {
    padding: 2px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4a5a50;
    font-size: ${(props) => props.theme.textSizes["text-text-s"]};
  }

  a {
    text-decoration: none;
    color: #4a5a50;
    font-size: ${(props) => props.theme.textSizes["text-text-s"]};
    transition: all ease 0.4s;

    &:hover {
      color: #5b705bff;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1.1rem;
    }

    span,
    a {
      font-size: 0.9rem;
    }
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 900px) {
    padding: 0 1.5rem;
    iframe {
      height: 300px;
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
    iframe {
      height: 250px;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #2e3d33; /* tom escuro, elegante e legível */
  border-top: 1px solid rgba(46, 61, 51, 0.15);
  margin-top: 2rem;

  a {
    color: #5a6d5a; /* tom da paleta, mais suave que o título */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #3a4b3a;
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 0.8rem 1rem;
  }
`;
