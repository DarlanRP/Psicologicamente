import { useState } from "react";
import {
  ContentHeader,
  HeaderContainer,
  IconImg,
  NavLinks,
  MobileMenu,
  MobileMenuButton,
  CloseMenuButton, // 1. Importe o novo botão
} from "./styles";

import iconHeader from "../../assets/logoHeader.png";
import { List, X } from "@phosphor-icons/react"; // 2. Importe o 'X'
import { Link } from "react-scroll";

export function Header() {
  const [open, setOpen] = useState(false);

  const scrollOffset = -110;

  return (
    <HeaderContainer>
      <ContentHeader>
        <IconImg>
          <img src={iconHeader} alt="ícone psicóloga Aline Santos" />
        </IconImg>

        <NavLinks>
          <Link to="contact" smooth={true} duration={500} offset={scrollOffset}>
            Contato
          </Link>

          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={scrollOffset}
          >
            Serviços
          </Link>

          <Link to="about" smooth={true} duration={500} offset={scrollOffset}>
            Sobre
          </Link>
        </NavLinks>

        {/* 3. Mude o onClick para 'true' */}
        <MobileMenuButton onClick={() => setOpen(true)}>
          <List size={36} weight="bold" />
        </MobileMenuButton>
      </ContentHeader>

      <MobileMenu $open={open}>
        {/* 4. Adicione o botão de fechar AQUI DENTRO */}
        <CloseMenuButton onClick={() => setOpen(false)}>
          <X size={32} weight="bold" />
        </CloseMenuButton>

        <Link to="contact" smooth={true} duration={500} offset={scrollOffset}>
          Contato
        </Link>

        <Link to="services" smooth={true} duration={500} offset={scrollOffset}>
          Serviços
        </Link>

        <Link to="about" smooth={true} duration={500} offset={scrollOffset}>
          Sobre
        </Link>
      </MobileMenu>
    </HeaderContainer>
  );
}
