import styled from "styled-components";
import { Container, MainContent, PageTitle } from "../styles/Styled";
import Sidebar from "../components/Sidebar";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
  SiReact,
  SiVite,
  SiStyledcomponents,
  SiMongodb,
  SiAmazon,
  SiMongoose,
} from "react-icons/si";
import { FiServer, FiLayout, FiLink, FiZap, FiArrowUp } from "react-icons/fi";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 107, 107, 0.3);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const SemesterTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 107, 107, 0.2);

  svg {
    color: #ff6b6b;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #fff;
    margin: 0;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    
    svg {
      font-size: 1.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    
    h2 {
      font-size: 1.3rem;
    }
  }
`;

const SectionsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), 
                   linear-gradient(135deg, #ff6b6b, #4ecdc4);
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.15);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  svg {
    color: #4ecdc4;
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #4ecdc4;
    margin: 0;
    font-weight: 600;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
    margin-bottom: 1rem;
    
    h3 {
      font-size: 1.1rem;
    }
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(78, 205, 196, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(78, 205, 196, 0.3);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #e0e0e0;

  svg {
    color: #4ecdc4;
    font-size: 1rem;
  }

  &:hover {
    background: rgba(78, 205, 196, 0.2);
    transform: scale(1.05);
    border-color: rgba(78, 205, 196, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    
    svg {
      font-size: 0.9rem;
    }
  }
`;

const SimpleList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const BackButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 
    0 4px 15px rgba(255, 107, 107, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 100;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 
      0 8px 25px rgba(255, 107, 107, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem;
  }
`;

export default function Conteudos() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const semesters = [
    {
      icon: <SiHtml5 size={24} />, 
      title: "1º Semestre", 
      items: [
        { icon: <SiHtml5 size={20} />, label: "HTML5" },
        { icon: <SiCss3 size={20} />, label: "CSS3" },
        { icon: <SiBootstrap size={20} />, label: "Bootstrap" },
        { icon: <SiJavascript size={20} />, label: "JavaScript" },
        { icon: <SiNodedotjs size={20} />, label: "Node.js" },
        { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
      ]
    },
    {
      icon: <SiPrisma size={24} />, 
      title: "2º Semestre", 
      sections: [
        {
          title: "Backend", 
          icon: <FiServer size={20} />, 
          items: [
            { icon: <SiTypescript size={20} />, label: "TypeScript" },
            { icon: <SiNodedotjs size={20} />, label: "Node.js" },
            { icon: <SiPrisma size={20} />, label: "Prisma" },
            { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
          ]
        },
        {
          title: "Frontend", 
          icon: <FiLayout size={20} />, 
          items: [
            { icon: <SiVite size={20} />, label: "Vite" },
            { icon: <SiReact size={20} />, label: "React" },
            { icon: <SiStyledcomponents size={20} />, label: "Styled‑Components" },
            { icon: <FiLink size={20} />, label: "APIs (Axios/Fetch)" },
            { icon: <FiZap size={20} />, label: "React Hooks" },
          ]
        },
      ]
    },
    {
      icon: <SiMongodb size={24} />, 
      title: "3º Semestre", 
      sections: [
        {
          title: "Backend", 
          icon: <FiServer size={20} />, 
          items: [
            { icon: <SiTypescript size={20} />, label: "TypeScript" },
            { icon: <SiNodedotjs size={20} />, label: "Node.js" },
            { icon: <SiMongodb size={20} />, label: "MongoDB" },
            { icon: <SiAmazon size={20} />, label: "AWS" },
            { icon: <SiMongoose size={20} />, label: "Mongoose" },
            { icon: <FiLink size={20} />, label: "Deploy de Servidores" },
          ]
        },
        {
          title: "Frontend", 
          icon: <FiLayout size={20} />, 
          items: [
            { icon: <SiVite size={20} />, label: "Vite" },
            { icon: <SiReact size={20} />, label: "React" },
            { icon: <SiStyledcomponents size={20} />, label: "Styled‑Components" },
            { icon: <FiLink size={20} />, label: "APIs (Axios/Fetch)" },
            { icon: <FiZap size={20} />, label: "React Hooks" },
          ]
        },
      ]
    },
  ];

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>Conteúdos Aprendidos</PageTitle>

        {semesters.map((sem, i) => (
          <ContentCard key={i}>
            <SemesterTitle>
              {sem.icon}
              <h2>{sem.title}</h2>
            </SemesterTitle>

            {sem.items && (
              <SimpleList>
                {sem.items.map((item, idx) => (
                  <TechItem key={idx}>
                    {item.icon}
                    <span>{item.label}</span>
                  </TechItem>
                ))}
              </SimpleList>
            )}

            {sem.sections && (
              <SectionsGrid>
                {sem.sections.map((section, idx) => (
                  <Section key={idx}>
                    <SectionHeader>
                      {section.icon}
                      <h3>{section.title}</h3>
                    </SectionHeader>
                    <TechList>
                      {section.items.map((item, itemIdx) => (
                        <TechItem key={itemIdx}>
                          {item.icon}
                          <span>{item.label}</span>
                        </TechItem>
                      ))}
                    </TechList>
                  </Section>
                ))}
              </SectionsGrid>
            )}
          </ContentCard>
        ))}

        <BackButton onClick={scrollToTop}>
          <FiArrowUp size={20} />
        </BackButton>
      </MainContent>
    </Container>
  );
}
