import styled from "styled-components";
import eu2 from "../assets/eu2.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Container, MainContent } from "../styles/Styled";

export default function Principal() {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <HeroSection>
          <ProfileImageContainer>
            <ProfileImage style={{ backgroundImage: `url(${eu2})` }} />
          </ProfileImageContainer>
          
          <HeroContent>
            <Title>Tiago Santini Da Silva</Title>
            <Subtitle>Desenvolvedor Full Stack</Subtitle>
            <Description>
              Estudante de Desenvolvimento de Software Multiplataforma na FATEC. 
              Especializado em criar soluções web modernas e APIs robustas.
            </Description>

            <SocialLinks>
              <SocialButton
                href="https://github.com/TiagoSan77"
                target="_blank"
                rel="noopener noreferrer"
                github
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </SocialButton>

              <SocialButton
                href="https://linkedin.com/in/tiago-santini-da-silva-b545752a6"
                target="_blank"
                rel="noopener noreferrer"
                linkedin
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </SocialButton>
            </SocialLinks>
          </HeroContent>
        </HeroSection>

        <SkillsSection>
          <SectionTitle>Tecnologias & Habilidades</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>Frontend</CategoryTitle>
              <SkillsList>
                <SkillTag>React</SkillTag>
                <SkillTag>TypeScript</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>HTML5</SkillTag>
                <SkillTag>CSS3</SkillTag>
                <SkillTag>Styled Components</SkillTag>
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Backend</CategoryTitle>
              <SkillsList>
                <SkillTag>Node.js</SkillTag>
                <SkillTag>APIs REST</SkillTag>
                <SkillTag>Banco de Dados</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>Java</SkillTag>
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Ferramentas</CategoryTitle>
              <SkillsList>
                <SkillTag>Git</SkillTag>
                <SkillTag>VS Code</SkillTag>
                <SkillTag>Figma</SkillTag>
                <SkillTag>Scrum</SkillTag>
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>
      </MainContent>
    </Container>
  );
}

// ==================== ESTILOS ====================

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
    align-items: flex-start;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid transparent;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4) border-box;
  background-clip: padding-box;
  background-size: cover;
  background-position: center;
  box-shadow: 
    0 0 20px rgba(255, 107, 107, 0.3),
    0 0 40px rgba(78, 205, 196, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    padding: 4px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    border-radius: 50%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  &:hover {
    transform: scale(1.05) rotate(3deg);
    box-shadow: 
      0 0 30px rgba(255, 107, 107, 0.5),
      0 0 60px rgba(78, 205, 196, 0.3),
      0 12px 48px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);

  @media (min-width: 768px) {
    bottom: 20px;
    font-size: 0.9rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  color: #e0e0e0;
  margin: 0;
  letter-spacing: 0.1em;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const SocialButton = styled.a<{ github?: boolean; linkedin?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 12px 20px;
  background: ${({ github, linkedin }) =>
    github 
      ? "linear-gradient(135deg, #24292e 0%, #2f363d 100%)" 
      : linkedin 
      ? "linear-gradient(135deg, #0077b5 0%, #005885 100%)" 
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::before {
      left: 100%;
    }
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 1rem;
  }
`;

const SkillsSection = styled.section`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 107, 107, 0.3);
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #4ecdc4;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
  color: #e0e0e0;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.25) 0%, rgba(78, 205, 196, 0.25) 100%);
    transform: scale(1.05);
    color: #4ecdc4;
  }

    @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;