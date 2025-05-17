import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiMenu, FiX, FiHome, FiFolder,
  FiChevronDown, FiChevronUp, FiUser, FiBookOpen
} from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjetos, setShowProjetos] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(o => !o)} isOpen={isOpen}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </ToggleButton>

      <Nav>
        <NavItem to="/inicio" isOpen={isOpen}>
          <FiHome size={20} /><span>Início</span>
        </NavItem>

        <Dropdown>
          <DropdownToggle onClick={() => setShowProjetos(p => !p)} isOpen={isOpen}>
            <FiFolder size={20} />
            {isOpen && <span>Projetos</span>}
            {isOpen && (showProjetos ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />)}
          </DropdownToggle>
          {showProjetos && (
            <Submenu isOpen={isOpen}>
              <SubItem to="/projetos/fatec">Faculdade</SubItem>
              <SubItem to="/projetos/meusprojetos">Pessoais</SubItem>
            </Submenu>
          )}
        </Dropdown>

        <NavItem to="/sobre" isOpen={isOpen}>
          <FiUser size={20} /><span>Sobre</span>
        </NavItem>

        <NavItem to="/conteudos" isOpen={isOpen}>
          <FiBookOpen size={20} /><span>Aprendizados</span>
        </NavItem>
      </Nav>
    </SidebarContainer>
  );
}

// ==================== ESTILOS ====================

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "220px" : "60px")};
  background-color: #111;
  color: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  padding: 20px 10px;
  transition: all 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6);
  z-index: 1000;

  @media (max-width: 768px) {
    ${({ isOpen }) => !isOpen && "width: 0; padding: 0; overflow: hidden;"}
  }
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  color: #00e0ff;
  cursor: pointer;
  margin-bottom: 40px;
  align-self: ${({ isOpen }) => (isOpen ? "flex-end" : "center")};
  transition: transform 0.2s ease;
  z-index: 1100;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: #111;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const NavItem = styled(Link)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isOpen }) => (isOpen ? "12px" : "0")};
  justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  color: inherit;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 224, 255, 0.15);
  }

  span {
    display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
    white-space: nowrap;
  }
`;

const Dropdown = styled.div`
  width: 100%;
`;

const DropdownToggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isOpen }) => (isOpen ? "12px" : "0")};
  justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  color: inherit;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 224, 255, 0.15);
  }

  span {
    display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
    white-space: nowrap;
  }
`;

const Submenu = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-left: ${({ isOpen }) => (isOpen ? "32px" : "0")};
  margin-top: 8px;
  align-items: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
  gap: 6px;
`;

const SubItem = styled(Link)`
  font-size: 0.95rem;
  color: #ccc;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background 0.2s;
  text-align: left;
  width: 100%;

  &:hover {
    background: rgba(0, 224, 255, 0.1);
  }
`;
