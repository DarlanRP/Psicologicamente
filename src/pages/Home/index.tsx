import {
  Container,
  Hero,
  Preview,
  ContentHome,
  TitleLg,
  TitleMd,
} from "./styles";
import perfil from "../../assets/perfil.png";

import { Button } from "../../components/Button";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Home() {
  return (
    <Container>
      <ContentHome>
        <Hero>
          <TitleLg>Psicóloga Aline Santos</TitleLg>

          <TitleMd>Psicóloga em São Paulo - SP (Presencial e Online)</TitleMd>

          <span>
            Recupere o equilíbrio emocional e viva com mais leveza e propósito.
            Através do autoconhecimento, você pode transformar ansiedade e
            tristeza em bem-estar e clareza interior.
          </span>

          <Button
            icon={<WhatsappLogo size={28} weight="light" />}
            text="Agendar consulta"
            href="https://wa.me/5511960849318"
          />
        </Hero>

        <Preview>
          <img src={perfil} alt="Foto de perfil Aline Santos" />
        </Preview>
      </ContentHome>
    </Container>
  );
}
