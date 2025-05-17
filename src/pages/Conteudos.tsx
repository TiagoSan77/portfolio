import styled from "styled-components";
import { Container } from "../styles/Styled";
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
import { FiServer, FiLayout, FiLink, FiZap } from "react-icons/fi";

export default function Conteudos() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const semesters = [
    {
      icon: <SiHtml5 size={24} />, title: "1º Semestre", items: [
        { icon: <SiHtml5 size={20} />, label: "HTML5" },
        { icon: <SiCss3 size={20} />, label: "CSS3" },
        { icon: <SiBootstrap size={20} />, label: "Bootstrap" },
        { icon: <SiJavascript size={20} />, label: "JavaScript" },
        { icon: <SiNodedotjs size={20} />, label: "Node.js" },
        { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
      ]
    },
    {
      icon: <SiPrisma size={24} />, title: "2º Semestre", sections: [
        {
          title: "Backend", icon: <FiServer size={20} />, items: [
            { icon: <SiTypescript size={20} />, label: "TypeScript" },
            { icon: <SiNodedotjs size={20} />, label: "Node.js" },
            { icon: <SiPrisma size={20} />, label: "Prisma" },
            { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
          ]
        },
        {
          title: "Frontend", icon: <FiLayout size={20} />, items: [
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
      icon: <SiMongodb size={24} />, title: "3º Semestre", sections: [
        {
          title: "Backend", icon: <FiServer size={20} />, items: [
            { icon: <SiTypescript size={20} />, label: "TypeScript" },
            { icon: <SiNodedotjs size={20} />, label: "Node.js" },
            { icon: <SiMongodb size={20} />, label: "MongoDB" },
            { icon: <SiAmazon size={20} />, label: "AWS" },
            { icon: <SiMongoose size={20} />, label: "Mongoose" },
            { icon: <FiLink size={20} />, label: "Deploy de Servidores" },
          ]
        },
        {
          title: "Frontend", icon: <FiLayout size={20} />, items: [
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
        <Header>
          <SiReact size={20} />
          <h2>Conteúdos Aprendidos</h2>
        </Header>

        {semesters.map((sem, i) => (
          <Card key={i}>
            <SemesterTitle>
              {sem.icon}
              <h2>{sem.title}</h2>
            </SemesterTitle>

            {sem.items && (
              <List>
                {sem.items.map((it, idx) => (
                  <li key={idx}>
                    {it.icon}
                    <span>{it.label}</span>
                  </li>
                ))}
              </List>
            )}

            {sem.sections && sem.sections.map((sec, si) => (
              <Section key={si}>
                <SectionHeader>
                  {sec.icon}
                  <h3>{sec.title}</h3>
                </SectionHeader>
                <List>
                  {sec.items.map((it, idx) => (
                    <li key={idx}>
                      {it.icon}
                      <span>{it.label}</span>
                    </li>
                  ))}
                </List>
              </Section>
            ))}
          </Card>
        ))}

        <BackButton onClick={scrollToTop}>↑ Voltar ao Início</BackButton>
      </Container>
  );
}



const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00e0ff;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
  }
`;

const Card = styled.div`
  background-color: #1f1f1f;
  color: #eaeaea;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 224, 255, 0.1);
  margin-bottom: 30px;
  width: 60vw;
`;

const SemesterTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  h2 {
    font-size: 1.6rem;
    color: #fff;
  }
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;

  h3 {
    font-size: 1.2rem;
    color: #ffcc00;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 1rem;
    line-height: 1.4;

    svg {
      color: #00e0ff;
      min-width: 20px;
    }
  }
`;

const BackButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00e0ff;
  color: #121212;
  border: none;
  padding: 12px 18px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 224, 255, 0.3);
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`;
