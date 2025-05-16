import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { Container } from "../styles/Styled";

const projetos = [
  {
    titulo: "ControlCli",
    descricao:
      "Plataforma inteligente para gestão de clientes, com login, envio automatizado de mensagens e dashboards estatísticos.",
    imagens: [
      ".././src/assets/home_controllCli.png",
      ".././src/assets/inicio_ControllCLi.png",
      ".././src/assets/clientes_ControllCli.png",
      ".././src/assets/estatisticas_ControllCli.png",
      ".././src/assets/perfil_ControllCli.png",
      ".././src/assets/clientes_Controll.png",
    ],
  },
  {
    titulo: "Ecomerce loja para vendas",
    descricao:
      "Ecomerce que possui todas as rotas para cadastrar produtos e usuarios com geração de pagamento pela api do mercado pago.",
    imagens: [
      ".././src/assets/finalizarpag.png",
      ".././src/assets/mp_finalizar.png",
      ".././src/assets/cadastroStore.png",
      ".././src/assets/CarrinhoStore.png",
      ".././src/assets/Perfil_store.png",
    ],
  },
];

export default function Projetos() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Meus Projetos:</Title>
        <Cards>
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index}>
              <ImageCarousel images={projeto.imagens} />
              <TextContainer>
                <h2>{projeto.titulo}</h2>
                <p>{projeto.descricao}</p>
              </TextContainer>
            </ProjetoCard>
          ))}
        </Cards>
      </Content>
    </Container>
  );
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <ImageWrapper>
        {images.length > 1 && <Arrow onClick={prev}>&lt;</Arrow>}
        <Img src={images[index]} alt="Projeto" onClick={() => setZoomed(true)} />
        {images.length > 1 && <Arrow onClick={next}>&gt;</Arrow>}
      </ImageWrapper>

      {zoomed && (
        <ZoomModal onClick={() => setZoomed(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setZoomed(false)}>✕</CloseButton>
            {images.length > 1 && (
              <>
                <ModalArrowLeft onClick={(e) => { e.stopPropagation(); prev(); }}>&lt;</ModalArrowLeft>
                <ModalArrowRight onClick={(e) => { e.stopPropagation(); next(); }}>&gt;</ModalArrowRight>
              </>
            )}
            <ZoomedImage src={images[index]} alt="Zoomed" />
          </ModalContent>
        </ZoomModal>
      )}
    </>
  );
}

// Estilização

const Content = styled.main`
  flex: 1;
  padding: 60px 40px 60px 170px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-left: 100px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2rem;
  color: #00e0ff;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 30px;
    padding: 0 10px;
  }
`;

const ProjetoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 224, 255, 0.1);
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

const TextContainer = styled.div`
  max-width: 500px;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    color: #00e0ff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  color: #00e0ff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: #fff;
  }
`;

const Img = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 12px;
  background-color: #2e2e2e;
  border: 2px solid #00e0ff;
  box-shadow: 0 0 10px rgba(0, 224, 255, 0.2);
  object-fit: cover;
  cursor: zoom-in;

  @media (max-width: 768px) {
    width: 60vw;
    height: 40vh;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
  }
`;

const ZoomModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background: #00e0ff;
  border: none;
  border-radius: 50%;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background: white;
  }
`;

const ModalArrow = styled(Arrow)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 1000;
`;

const ModalArrowLeft = styled(ModalArrow)`
  left: 20px;
`;

const ModalArrowRight = styled(ModalArrow)`
  right: 20px;
`;

const ZoomedImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
  border: 3px solid #00e0ff;
  object-fit: contain;
`;
