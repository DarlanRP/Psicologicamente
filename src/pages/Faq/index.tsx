import { FaqItem } from "../../components/FaqItem";
import { FaqContainer, FaqContainerItem, Title } from "./styles";

export function Faq() {
  return (
    <FaqContainer>
      <FaqContainerItem>
        <Title>Perguntas frequentes</Title>

        <FaqItem
          question="Como funciona a primeira sessão ?"
          answer="A primeira sessão é um momento de acolhimento e escuta. Nela, 
                  você poderá compartilhar o que te trouxe até aqui e entenderemos juntos como posso te ajudar."
        />

        <FaqItem
          question="A terapia é indicada para mim ?"
          answer="A terapia é indicada para qualquer pessoa que deseje compreender melhor seus sentimentos, 
                  comportamentos e relações. Não é preciso estar em sofrimento intenso para buscar ajuda, 
                  o autoconhecimento é um processo valioso em qualquer fase da vida."
        />

        <FaqItem
          question="O que posso esperar do processo terapêutico ?"
          answer="A terapia é um espaço seguro, ético e sem julgamentos. Ao longo dos encontros, 
                  você será convidado(a) a se conhecer mais profundamente, construir novos significados e desenvolver 
                  recursos para lidar com suas emoções e desafios."
        />

        <FaqItem
          question="O que posso esperar do processo terapêutico infantil ?"
          answer="O processo terapêutico infantil oferece à criança um espaço seguro e acolhedor,
                  onde ela pode se expressar livremente por meio de brincadeiras, desenhos e conversas.
                  A partir dessas vivências, a terapia ajuda a compreender sentimentos, lidar com desafios e desenvolver habilidades emocionais importantes para o dia a dia.
                  Os pais também fazem parte desse caminho, recebendo orientações e acompanhando cada etapa, fortalecendo a relação familiar e contribuindo para o crescimento da criança."
        />

        <FaqItem
          question="Qual a frequência das sessões ?"
          answer="A frequência pode variar conforme suas necessidades, mas geralmente os encontros acontecem uma vez por semana, 
                  com duração de 50 minutos."
        />

        <FaqItem
          question="Você atende de forma online ou presencial ?"
          answer="Atendo de forma online e presencial. Ambas as modalidades oferecem o mesmo acolhimento e sigilo, 
                  para que você escolha o formato que melhor se adapta à sua rotina."
        />

        <FaqItem
          question="Aceita convênio médico ?"
          answer="O atendimento é particular, mas posso emitir nota fiscal para facilitar o reembolso junto ao seu plano de saúde."
        />
      </FaqContainerItem>
    </FaqContainer>
  );
}
