import { ButtonContainer } from "./styles";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string | number;
  icon?: ReactNode;
  mt?: string;
}

export function Button({ text, icon, mt, ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      target="_blank"
      rel="noopener noreferrer"
      mt={mt}
      {...rest}
    >
      {icon}
      {text}
    </ButtonContainer>
  );
}
