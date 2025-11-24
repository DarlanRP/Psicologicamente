import { useEffect, useState } from "react";
import { ScrollButton } from "./styles";
import { ArrowUp } from "@phosphor-icons/react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton $isVisible={isVisible} onClick={scrollToTop}>
      <ArrowUp size={24} weight="bold" />
    </ScrollButton>
  );
}
