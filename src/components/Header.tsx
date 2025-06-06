import header from '../assets/header-background.jpg';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="header">
    <img
      src={header}
      alt="Feria virtual de Between Hills"
      className="header-background"
    />
    <div className="header-overlay">
      <div className="header-content">
        <h1 className="header-title">Between Hills - Feria Virtual</h1>
        <p className="header-subtitle">
          ¡Unite a nuestro grupo de WhatsApp para conocer lo nuevo antes que nadie!
        </p>
        <a
          href="https://chat.whatsapp.com/FNE4ejLzpgH6hF2v0mXcb2"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-consult flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={20} />
          Unirme al grupo
        </a>
      </div>
    </div>
  </header>
);

export default Header;
