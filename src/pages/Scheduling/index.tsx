import {
  Container,
  Description,
  DivDescription,
  DivImg,
  Title,
} from "./styles";
import Ambiente from "../../assets/ambiente.png";
import { Button } from "../../components/Button";

export function Scheduling() {
  return (
    <Container>
      <DivImg>
        <img src={Ambiente} alt="" />
      </DivImg>

      <DivDescription>
        <Title>Agendar consulta</Title>
        <Description>
          Seu tempo de se priorizar chegou. Escolha o melhor horário e comece
          essa jornada de autoconhecimento.
        </Description>
        <Button
          text="Agendar consulta"
          href="https://wa.me/5511960849318"
          mt="2.5rem"
        />
      </DivDescription>
    </Container>
  );
}
