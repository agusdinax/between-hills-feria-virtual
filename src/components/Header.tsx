import header from '../assets/header-background.jpg';

const Header: React.FC = () => (
  <header className="header">
    <img
      src={header}
      alt="Feria virtual de Between Hills"
      className="header-background"
    />
    <div className="header-overlay" />
    <h1 className="header-title">Between Hills - Feria Virtual</h1>
  </header>
)
export default Header