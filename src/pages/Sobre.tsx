import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { Container } from "../styles/Styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 224, 255, 0.1);
  gap: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00e0ff;;
`;

const Description = styled.div`
  color: #ccc;
  width: 50vw;
`;

const Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 50vw;
`;

const Pergunta = styled.div`
  background-color: #2a2a2a;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 224, 255, 0.05);

  h3 {
    margin: 0 0 8px;
    color: #00e0ff;
  }

  p {
    margin: 0;
    color: #ccc;
  }
`;

export default function Sobre() {
  return (
    <Container>
      <Card>
        <Sidebar />
        <Title>Sobre mim:</Title>

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

        <Perguntas>
          <Pergunta>
            <h3>Quais tecnologias foram ultilizadas para desenvolver esse Portifolio?</h3>
            <p>O projeto foi desenvolvido com React-ts, com as bibliotecas: React Router Dom, Styled-Component, React Icons.</p>
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
            <h3>Você esta em busca de estagio?</h3>
            <p>Sim, da data de criação desse repositorio 14/05/2025</p>
          </Pergunta>
        </Perguntas>
      </Card>
    </Container>
  );
}
