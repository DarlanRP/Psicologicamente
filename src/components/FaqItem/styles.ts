import styled from "styled-components";

export const FaqItemContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

export const Question = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  color: #1a3c1e;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;

  span {
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 0.9rem;
    }
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.4s ease;
  color: #2f3b2f; /* mais claro e suave */
  font-size: 1rem;
  line-height: 1.6;
  margin-top: ${({ isOpen }) => (isOpen ? "0.5rem" : "0")};

  @media (max-width: 900px) {
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
`;
