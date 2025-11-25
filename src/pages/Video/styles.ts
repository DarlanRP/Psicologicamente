import styled from "styled-components";

export const VideoSectionContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
  min-height: 54.75rem;
  background: radial-gradient(
    circle at center,
    #c3d6c3 0%,
    #a5c0a5 60%,
    #718f70 100%
  );
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  max-width: 1100px;
`;

export const Title = styled.h1`
  padding: 0 0.5rem;
  font-size: 2.5rem;
  color: #3b5240;
  font-weight: bold;
  font-family: "Bellota", Sans-serif;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  color: #3b5240;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1rem;
  max-width: 520px;

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    max-width: 90%;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

export const MediaWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  height: 580px;
  margin: 2rem auto;
  background: #333;
  aspect-ratio: 9 / 16;
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
    display: block;
    border: none;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    max-width: 300px;
    height: 520px;
  }
`;
