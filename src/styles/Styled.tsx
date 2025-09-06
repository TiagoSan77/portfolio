import styled from "styled-components";

// Breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px'
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: #f5f5f5;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(78, 205, 196, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 0;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 70px;
    padding: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-left: 240px;
    padding: 4rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.02em;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    text-align: left;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 3rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
    text-align: left;
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
    max-width: 600px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 107, 107, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 4px 15px rgba(255, 107, 107, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
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
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
      0 8px 25px rgba(255, 107, 107, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(1.02);
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    padding: 14px 28px;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
  color: #4ecdc4;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0.25rem;
  border: 1px solid rgba(78, 205, 196, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.25) 0%, rgba(78, 205, 196, 0.25) 100%);
    transform: scale(1.05);
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
`;
