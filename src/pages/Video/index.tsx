import {
  ContentWrapper,
  Description,
  MediaWrapper,
  Title,
  VideoSectionContainer,
} from "./styles";
import videoPresentation from "../../assets/videoApresentacao.mp4";
import capa from "../../assets/capa.png";
import { Button } from "../../components/Button";

export function Video() {
  return (
    <VideoSectionContainer>
      <ContentWrapper>
        <Title>Vamos falar sobre terapia infantil?</Title>
        <Description>
          Aqui eu compartilho como a terapia infantil pode apoiar o
          desenvolvimento emocional das crianças e contribuir para uma infância
          mais saudável.
        </Description>

        <MediaWrapper>
          <video controls width={"100%"} poster={capa}>
            <source src={videoPresentation} />
          </video>
        </MediaWrapper>

        <Button text="Entre em contato" href="https://wa.me/5511960849318" />
      </ContentWrapper>
    </VideoSectionContainer>
  );
}
