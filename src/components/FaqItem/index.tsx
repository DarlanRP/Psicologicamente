import { useState } from "react";
import { Answer, FaqItemContainer, Question } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FaqItemContainer>
      <Question onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </Question>

      <Answer isOpen={isOpen}>{answer}</Answer>
    </FaqItemContainer>
  );
}
