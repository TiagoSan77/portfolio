import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { Container, MainContent, PageTitle, Card } from "../styles/Styled";

export default function Sobre() {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>Sobre mim</PageTitle>

        <AboutGrid>
          <IntroCard>
            <Description>
              Me chamo Tiago Santini Da Silva, tenho 25 anos e estou cursando a faculdade de Desenvolvimento de Software Multiplataformas na FATEC Professor Francisco de Moura.
            </Description>
            <Description>
              Estou em busca de experiência na área, com preferência por vagas remotas ou híbridas.
            </Description>
            <Description>
              Me considero um desenvolvedor fullstack em formação, com maior afinidade pelo backend.
              Tenho capacidade para criar projetos e APIs REST.
              Atualmente estou aprendendo a desenvolver projetos baseados em IA vertical, chatbots e integrações no backend.
            </Description>
          </IntroCard>

          <FAQSection>
            <SectionTitle>Perguntas Frequentes</SectionTitle>
            <Perguntas>
              <Pergunta>
                <h3>Quais tecnologias foram utilizadas para desenvolver esse Portfólio?</h3>
                <p>
                  O projeto foi desenvolvido com 
                  <TechBadge>React-TS</TechBadge>
                  <TechBadge>React Router Dom</TechBadge>
                  <TechBadge>Styled-Components</TechBadge>
                  <TechBadge>React Icons</TechBadge>
                </p>
              </Pergunta>
              <Pergunta>
                <h3>Está disponível para trabalho remoto?</h3>
                <p>Sim, estou buscando oportunidades remotas ou híbridas.</p>
              </Pergunta>
              <Pergunta>
                <h3>Você trabalha bem em equipe?</h3>
                <p>Sim, já participei de diversos projetos em grupo na faculdade utilizando metodologias ágeis como Scrum.</p>
              </Pergunta>
              <Pergunta>
                <h3>Você está em busca de estágio?</h3>
                <p>Sim, da data de criação desse repositório 14/05/2025</p>
              </Pergunta>
            </Perguntas>
          </FAQSection>
        </AboutGrid>
      </MainContent>
    </Container>
  );
}

// ==================== ESTILOS ====================

const AboutGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const IntroCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Pergunta = styled(Card)`
  background: rgba(255, 255, 255, 0.03);
  border-left: 4px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), 
                   linear-gradient(135deg, #ff6b6b, #4ecdc4);
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:hover {
    transform: translateX(8px) translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 107, 107, 0.15);
  }

  h3 {
    margin: 0 0 0.8rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    margin: 0;
    color: #ffffff;
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const TechBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%);
  color: #4ecdc4;
  padding: 0.25rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0.2rem 0.3rem;
  border: 1px solid rgba(78, 205, 196, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.3) 0%, rgba(78, 205, 196, 0.3) 100%);
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
  }
`;
