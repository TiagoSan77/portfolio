import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu, FiX, FiHome, FiFolder,
  FiChevronDown, FiChevronUp, FiUser, FiBookOpen
} from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjetos, setShowProjetos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fechar menu mobile ao navegar
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location, isMobile]);

  return (
    <>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)} isMobile={isMobile}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </MobileMenuButton>

      <Overlay isOpen={isOpen && isMobile} onClick={() => setIsOpen(false)} />

      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        <Brand>
          <BrandText>TS</BrandText>
          <BrandSubtext>Portfolio</BrandSubtext>
        </Brand>

        <Nav>
          <NavItem to="/inicio" isActive={location.pathname === "/inicio" || location.pathname === "/"}>
            <FiHome size={20} />
            <span>Início</span>
          </NavItem>

          <DropdownContainer>
            <DropdownToggle onClick={() => setShowProjetos(!showProjetos)}>
              <div className="main-content">
                <FiFolder size={20} />
                <span>Projetos</span>
              </div>
              {showProjetos ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
            </DropdownToggle>
            
            <Submenu isOpen={showProjetos}>
              <SubItem to="/projetos/fatec" isActive={location.pathname === "/projetos/fatec"}>
                Faculdade
              </SubItem>
              <SubItem to="/projetos/meusprojetos" isActive={location.pathname === "/projetos/meusprojetos"}>
                Pessoais
              </SubItem>
            </Submenu>
          </DropdownContainer>

          <NavItem to="/sobre" isActive={location.pathname === "/sobre"}>
            <FiUser size={20} />
            <span>Sobre</span>
          </NavItem>

          <NavItem to="/conteudos" isActive={location.pathname === "/conteudos"}>
            <FiBookOpen size={20} />
            <span>Aprendizados</span>
          </NavItem>
        </Nav>

        <Footer>
          <FooterText>© 2025 Tiago Santini</FooterText>
        </Footer>
      </SidebarContainer>
    </>
  );
}

// ==================== ESTILOS ====================

const MobileMenuButton = styled.button<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1002;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  border: none;
  color: white;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(5px);
`;

const SidebarContainer = styled.aside<{ isOpen: boolean; isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen, isMobile }) => 
    isMobile ? (isOpen ? '280px' : '0') : '240px'};
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  color: #eaeaea;
  display: flex;
  flex-direction: column;
  padding: ${({ isOpen, isMobile }) => 
    isMobile ? (isOpen ? '2rem 1.5rem' : '0') : '2rem 1.5rem'};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 1px 0 0 rgba(255, 255, 255, 0.1);
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 767px) {
    width: ${({ isOpen }) => (isOpen ? '280px' : '0')};
  }

  @media (min-width: 768px) {
    width: 70px;
    padding: 1.5rem 0.5rem;

    &:hover {
      width: 240px;
      padding: 2rem 1.5rem;
    }
  }
`;

const Brand = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
    }
  }
`;

const BrandText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.5rem 0;

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      font-size: 1.5rem;
    }
  }
`;

const BrandSubtext = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin: 0;
  font-weight: 300;

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#4ecdc4' : '#eaeaea')};
  background: ${({ isActive }) => 
    isActive ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%)' : 'transparent'};
  border: 1px solid ${({ isActive }) => 
    isActive ? 'rgba(78, 205, 196, 0.3)' : 'transparent'};
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
    transform: translateX(4px);
    color: #4ecdc4;
    
    &::before {
      left: 100%;
    }
  }

  span {
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      ${SidebarContainer}:not(:hover) & {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      justify-content: center;
      padding: 1rem 0.5rem;
    }
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  color: #eaeaea;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
    transform: translateX(4px);
    color: #4ecdc4;
    
    &::before {
      left: 100%;
    }
  }

  .main-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    span {
      font-size: 0.95rem;
      
      @media (min-width: 768px) {
        ${SidebarContainer}:not(:hover) & {
          display: none;
        }
      }
    }
  }

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      justify-content: center;
      padding: 1rem 0.5rem;
      
      svg:last-child {
        display: none;
      }
    }
  }
`;

const Submenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.25rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
  border-left: 2px solid rgba(255, 107, 107, 0.3);
  padding-left: 1rem;

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      display: none;
    }
  }
`;

const SubItem = styled(Link)<{ isActive: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#4ecdc4' : '#ccc')};
  background: ${({ isActive }) => 
    isActive ? 'rgba(78, 205, 196, 0.1)' : 'transparent'};
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(78, 205, 196, 0.1);
    color: #4ecdc4;
    transform: translateX(4px);
  }
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    ${SidebarContainer}:not(:hover) & {
      display: none;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 0;
`;
