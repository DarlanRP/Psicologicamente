import {
  Container,
  ServicesDiv,
  IconDivider,
  ServicesSection,
  ServiceCard,
} from "./styles";
import SofaIcon from "../../assets/sofa.svg?react";
import KidsIcon from "../../assets/kids.svg?react";
import OnlineIcon from "../../assets/online.svg?react";
import { Heart } from "@phosphor-icons/react";

export function Services() {
  return (
    <Container id="services">
      <ServicesDiv>
        <h3>Serviços</h3>
        <IconDivider>
          <Heart size={28} weight="fill" />{" "}
        </IconDivider>
      </ServicesDiv>

      <ServicesSection>
        <ServiceCard>
          <SofaIcon width={50} height={50} />
          <h3>Psicoterapia Presencial</h3>
          <p>
            A terapia oferece espaço reservado e confidencial. O atendimento
            presencial favorece a construção de vínculo terapêutico, a expressão
            emocional espontânea e a atuação direta do profissional na
            observação de comportamentos, linguagem corporal e demais aspectos
            importantes ao processo clínico.
          </p>
        </ServiceCard>
        <ServiceCard middle>
          <KidsIcon width={50} height={50} />
          <h3>Psicoterapia Infantil</h3>
          <p>
            O atendimento tem como objetivo oferecer um espaço seguro e
            acolhedor para que a criança possa expressar seus sentimentos,
            desenvolver habilidades socioemocionais e elaborar situações que
            estejam impactando seu bem-estar e desenvolvimento.
          </p>
        </ServiceCard>
        <ServiceCard>
          <OnlineIcon width={50} height={50} />
          <h3>Psicoterapia Online</h3>
          <p>
            As sessões são realizadas por videochamada, garantindo sigilo,
            acolhimento e um ambiente tranquilo para o atendimento.
          </p>
        </ServiceCard>
      </ServicesSection>
    </Container>
  );
}
