import styled from "styled-components";
import eu2 from "../assets/eu2.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

export default function Principal() {
  return (
    <Container>
      <SidebarPlaceholder><Sidebar/></SidebarPlaceholder>
      <ProfileImage style={{ backgroundImage: `url(${eu2})` }} />
      <Title>Tiago Santini Da Silva</Title>
      <Subtitle>Desenvolvedor Full Stack</Subtitle>

      <SocialLinks>
        <SocialButton
          href="https://github.com/TiagoSan77"
          target="_blank"
          rel="noopener noreferrer"
          github
        >
          <FaGithub size={20} />
          GitHub
        </SocialButton>

        <SocialButton
          href="https://linkedin.com/in/tiago-santini-da-silva-b545752a6"
          target="_blank"
          rel="noopener noreferrer"
          linkedin
        >
          <FaLinkedin size={20} />
          LinkedIn
        </SocialButton>
      </SocialLinks>
    </Container>
  );
}

// Estilos

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  padding: 40px 20px;
`;

const SidebarPlaceholder = styled.div`
  align-self: flex-start;
  margin-bottom: 30px;
  font-size: 1rem;
  color: #888;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #ccc;
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialButton = styled.a<{ github?: boolean; linkedin?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background-color: ${({ github, linkedin }) =>
    github ? "#333" : linkedin ? "#0077b5" : "#444"};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
`;
