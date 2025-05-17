import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import {
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

import homeControlCli from ".././assets/home_controllCli.png";
import inicioControlCli from ".././assets/inicio_ControllCLi.png";
import clientesControlCli from ".././assets/clientes_ControllCli.png";
import estatisticasControlCli from ".././assets/estatisticas_ControllCli.png";
import perfilControlCli from ".././assets/perfil_ControllCli.png";
import clientesControl from ".././assets/clientes_Controll.png";

import finalizarPag from ".././assets/finalizarpag.png";
import mpFinalizar from ".././assets/mp_finalizar.png";
import cadastroStore from ".././assets/cadastroStore.png";
import carrinhoStore from ".././assets/CarrinhoStore.png";
import perfilStore from ".././assets/Perfil_store.png";

const projetos = [
  {
    titulo: "ControlCli",
    descricao:
      "Plataforma inteligente para gestão de clientes, com login, envio automatizado de mensagens e dashboards estatísticos.",
    imagens: [
      homeControlCli,
      inicioControlCli,
      clientesControlCli,
      estatisticasControlCli,
      perfilControlCli,
      clientesControl,
    ],
    tecnologias: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    icones: [SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiJquery],
  },
  {
    titulo: "Ecommerce Loja para Vendas",
    descricao:
      "Ecommerce completo com cadastro de produtos e usuários e integração de pagamento via API Mercado Pago.",
    imagens: [
      finalizarPag,
      mpFinalizar,
      cadastroStore,
      carrinhoStore,
      perfilStore,
    ],
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    icones: [SiReact, SiNodedotjs, SiPostgresql],
  },
];

export default function ProjetosP() {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Title>Alguns Projetos:</Title>
        <Cards>
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index}>
              <ImageCarousel images={projeto.imagens} />
              <TextContainer>
                <h2>{projeto.titulo}</h2>
                <p>{projeto.descricao}</p>
                <TecnologiasList>
                  {projeto.tecnologias.map((tech, i) => {
                    const Icon = projeto.icones[i];
                    return (
                      <TecnologiaItem key={tech}>
                        <Icon size={20} />
                        <span>{tech}</span>
                      </TecnologiaItem>
                    );
                  })}
                </TecnologiasList>
              </TextContainer>
            </ProjetoCard>
          ))}
        </Cards>
      </Content>
    </Wrapper>
  );
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <ImageWrapper>
        {images.length > 1 && <Arrow onClick={prev}>&lt;</Arrow>}
        <Img
          src={images[index]}
          alt="Projeto"
          onClick={() => setZoomed(true)}
          loading="lazy"
        />
        {images.length > 1 && <Arrow onClick={next}>&gt;</Arrow>}
      </ImageWrapper>

      {zoomed && (
        <ZoomModal onClick={() => setZoomed(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setZoomed(false)}>✕</CloseButton>
            {images.length > 1 && (
              <>
                <ModalArrowLeft
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                >
                  &lt;
                </ModalArrowLeft>
                <ModalArrowRight
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                >
                  &gt;
                </ModalArrowRight>
              </>
            )}
            <ZoomedImage src={images[index]} alt="Zoomed" />
          </ModalContent>
        </ZoomModal>
      )}
    </>
  );
}

// ==================== ESTILOS ====================

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Content = styled.main`
  flex: 1;
  padding: 60px 40px 60px 170px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2rem;
  color: #00e0ff;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ProjetoCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 224, 255, 0.1);
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 1.5rem;
    color: #00e0ff;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

const TecnologiasList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const TecnologiaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(0, 224, 255, 0.1);
  padding: 8px 15px;
  border-radius: 25px;
  color: #00e0ff;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(0, 224, 255, 0.2);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 250px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Arrow = styled.button`
  background: none;
  border: none;
  color: #00e0ff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 12px;
  border: 2px solid #00e0ff;
  object-fit: cover;
  cursor: zoom-in;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;

const ZoomModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -10px;
  background: none;
  border: none;
  color: #00e0ff;
  font-size: 2rem;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const ModalArrow = styled(Arrow)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;

const ModalArrowLeft = styled(ModalArrow)`
  left: 20px;
`;

const ModalArrowRight = styled(ModalArrow)`
  right: 20px;
`;

const ZoomedImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  border: 2px solid #00e0ff;
  box-shadow: 0 0 20px rgba(0, 224, 255, 0.3);
  object-fit: contain;
`;
