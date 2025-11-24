import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 6.7rem;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors["green-header"]} 80%,
    ${(props) => props.theme.colors["green-header"]}00 100%
  );

  z-index: 10;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 1.5rem;
  margin: auto;
  align-items: center;
  position: relative;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 1rem;
    justify-content: center;
  }
`;

export const IconImg = styled.div`
  padding-top: 5px;

  img {
    cursor: pointer;
    width: 260px;
    height: 73px;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    img {
      width: 200px;
      height: auto;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;

  > a {
    position: relative;
    margin-left: 1rem;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors["light-green"]};
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      bottom: -1.34px;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${(props) => props.theme.colors["light-green"]};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors["light-green"]};
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    z-index: 50;
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 240px;
    background: ${(props) => props.theme.colors["green-header"]};
    padding: 2rem 1rem;

    z-index: 100;

    transform: ${(props) =>
      props.$open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
  }

  a {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors["light-green"]};
  }
`;
export const CloseMenuButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors["light-green"]};
  cursor: pointer;

  display: none;

  @media (max-width: 900px) {
    display: block;

    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 110;
  }
`;
