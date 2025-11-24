import {
  DivImg,
  FooterContainer,
  FooterContent,
  DivContact,
  DivInfo,
  MapContainer,
  FooterBottom,
} from "./styles";
import logo from "../../assets/logoFooter.png";
import { Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { toast } from "sonner";

export function Footer() {
  const email = "psi.aline@outlook.com.br";

  async function handleCopie() {
    await navigator.clipboard.writeText(email);
    toast.success("Email copiado com sucesso!.");
  }
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <DivImg>
          <img src={logo} alt="" />
        </DivImg>

        <DivContact>
          <DivInfo>
            <h2>Informações de contato</h2>
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
              <InstagramLogo size={24} />{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/psi.alinesantoss/"
              >
                @psi.alinesantoss
              </a>
            </span>
          </DivInfo>
          <DivInfo>
            <h2>Horário de Atendimento</h2>
            <span>Segunda à Sexta 09h às 17h.</span>
            <span>Sábado 07h às 13h.</span>
          </DivInfo>
        </DivContact>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.417761079591!2d-46.6900733!3d-23.7324776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f132d92ea9d%3A0x620d75b2fbf60dfb!2sRua%20Manuel%20da%20Maia%2C%20129%20-%20Parque%20America%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004822-120!5e0!3m2!1spt-BR!2sbr!4v1762818915632!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{
              border: 0,
              borderRadius: "12px",
              maxWidth: "900px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            loading="lazy"
          ></iframe>
        </MapContainer>

        <FooterBottom>
          <p>
            © {new Date().getFullYear()} Aline Santos — Todos os direitos
            reservados. Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/darlanrp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Darlan Rodrigues
            </a>
            .
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}
