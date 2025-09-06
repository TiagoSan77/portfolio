import Rota from '../src/routes/index';
import './index.css';

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff'
    }}>
      <Rota/>
    </div>
  )
}