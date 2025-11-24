import {
  Container,
  ContainerAbout,
  ImgAbout,
  AboutContent,
  AboutMe,
  CurrentActivities,
  Formation,
} from "./styles";
import logoAbout from "../../assets/borboletaAbout.png";
import {
  IdentificationBadge,
  Stethoscope,
  Student,
} from "@phosphor-icons/react";

export function About() {
  return (
    <Container id="about">
      <ContainerAbout>
        <ImgAbout>
          <img src={logoAbout} />
        </ImgAbout>

        <AboutContent>
          <div>
            <AboutMe>
              <h3>Sobre mim</h3>
              <h1>Psicóloga Aline Santos</h1>
              <span>
                <Stethoscope size={32} weight="bold" /> CRP - 06/206352
              </span>
            </AboutMe>

            <Formation>
              <span>
                <Student size={32} weight="bold" />
                Formação Acadêmica
              </span>
              <p>
                Graduada em Psicologia pela Faculdade Ítalo, com parte da
                formação realizada na FMU. Possuo experiência em projetos
                sociais voltados ao atendimento infantil. Sou pós-graduada em
                Terapia ABA e em Neuropsicologia, com ênfase no acompanhamento
                de crianças e no Transtorno do Espectro Autista (TEA).
              </p>
            </Formation>

            <CurrentActivities>
              <span>
                <IdentificationBadge size={32} weight="bold" />
                Atividades Atuais
              </span>
              <p>
                Atualmente, realizo atendimentos clínicos na Clínica
                Multidisciplinar Elaine Ribeiro, com foco no público infantil.
                Também desenvolvo um trabalho de Terapia Social em uma
                instituição religiosa, oferecendo apoio psicológico a pessoas em
                situação de vulnerabilidade, ampliando o acesso ao cuidado
                emocional. Além disso, realizo atendimentos online,
                proporcionando comodidade e acolhimento para quem prefere ou
                necessita dessa modalidade.
              </p>
            </CurrentActivities>
          </div>
        </AboutContent>
      </ContainerAbout>
    </Container>
  );
}
