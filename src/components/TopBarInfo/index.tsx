import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { TopBarInfoContainer, InfosDiv } from "./styles";
import { toast } from "sonner";

export function TopBarInfo() {
  const email = "psi.aline@outlook.com.br";

  async function handleCopie() {
    await navigator.clipboard.writeText(email);
    toast.success("Email copiado com sucesso!.");
  }

  return (
    <TopBarInfoContainer>
      <InfosDiv>
        <span>
          <WhatsappLogo size={24} />{" "}
          <a target="_blank" href="https://wa.me/5511960849318">
            (11) 96084-9318
          </a>
        </span>

        <span>
          <Envelope size={24} />{" "}
          <p onClick={handleCopie} style={{ cursor: "pointer" }}>
            psi.aline@outlook.com.br
          </p>
        </span>

        <span>
          <MapPin size={24} />
          <a
            target="_blank"
            href="https://www.google.com/maps?q=Rua+Manuel+da+Maia,+129+-+Parque+America+-+São+Paulo+-+SP"
          >
            Rua Manuel da Maia, 129 - Parque America - São Paulo - SP
          </a>
        </span>
      </InfosDiv>
    </TopBarInfoContainer>
  );
}
