import styled from "styled-components";

export const TopBarInfoContainer = styled.section`
  width: 100%;
  height: 2rem;
  background: ${(props) => props.theme.colors["light-green"]};
  transition: all ease 0.3s;
  overflow: hidden;

  @media (max-width: 900px) {
    opacity: 0;
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    border: 0;
    pointer-events: none;
  }
`;

export const InfosDiv = styled.div`
  max-width: 55.87rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;

  > span {
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: ${(props) => props.theme.textSizes["text-text-s"]};

    svg {
      color: ${(props) => props.theme.colors["green-header"]};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: ${(props) => props.theme.textSizes["text-text-s"]};
  }
`;
