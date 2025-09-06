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

// ==================== ESTILOS RESPONSIVOS ====================

const MobileMenuButton = styled.button<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(2px);

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isMobile, isOpen }) => {
    if (isMobile) {
      return isOpen ? '280px' : '0px';
    }
    return '240px';
  }};
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  color: #eaeaea;
  display: flex;
  flex-direction: column;
  padding: ${({ isMobile, isOpen }) => {
    if (isMobile) {
      return isOpen ? '2rem 1.5rem' : '0';
    }
    return '2rem 1.5rem';
  }};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 70px;
    padding: 1.5rem 0.75rem;

    &:hover {
      width: 240px;
      padding: 2rem 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 240px;
    padding: 2rem 1.5rem;

    &:hover {
      width: 240px;
    }
  }
`;

const Brand = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;

  @media (min-width: 768px) and (max-width: 1023px) {
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
  margin: 0;
  letter-spacing: -0.02em;
`;

const BrandSubtext = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0;
  margin-top: 0.25rem;
  font-weight: 300;

  @media (min-width: 768px) and (max-width: 1023px) {
    ${SidebarContainer}:not(:hover) & {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const NavItem = styled(Link)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ isActive }) => (isActive ? '#4ecdc4' : 'inherit')};
  text-decoration: none;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  background: ${({ isActive }) => 
    isActive ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%)' : 'transparent'};

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
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
    transform: translateX(4px);
    color: #4ecdc4;
    
    &::before {
      left: 100%;
    }
  }

  span {
    font-size: 0.95rem;
    white-space: nowrap;

    @media (min-width: 768px) and (max-width: 1023px) {
      ${SidebarContainer}:not(:hover) & {
        display: none;
      }
    }
  }

  svg {
    min-width: 20px;
  }
`;

const DropdownContainer = styled.div`
  width: 100%;
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-weight: 400;

  .main-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

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
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
    transform: translateX(4px);
    color: #4ecdc4;
    
    &::before {
      left: 100%;
    }
  }

  span {
    font-size: 0.95rem;
    white-space: nowrap;

    @media (min-width: 768px) and (max-width: 1023px) {
      ${SidebarContainer}:not(:hover) & {
        display: none;
      }
    }
  }

  svg:last-child {
    @media (min-width: 768px) and (max-width: 1023px) {
      ${SidebarContainer}:not(:hover) & {
        display: none;
      }
    }
  }
`;

const Submenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding-left: 1rem;
  margin-top: 0.5rem;
  gap: 0.25rem;
  border-left: 2px solid rgba(255, 107, 107, 0.3);
  margin-left: 1rem;
`;

const SubItem = styled(Link)<{ isActive?: boolean }>`
  font-size: 0.9rem;
  color: ${({ isActive }) => (isActive ? '#4ecdc4' : '#ccc')};
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  font-weight: ${({ isActive }) => (isActive ? '500' : '300')};
  background: ${({ isActive }) => 
    isActive ? 'rgba(78, 205, 196, 0.1)' : 'transparent'};

  &:hover {
    background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(69, 183, 209, 0.1) 100%);
    color: #4ecdc4;
    transform: translateX(4px);
  }
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    ${SidebarContainer}:not(:hover) & {
      display: none;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
  font-weight: 300;
`;
