import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <MenuOutlinedIcon className="navbar-menu-icon" />
        <p className="navbar-menu-text">All</p>
      </div>
      <div className="navbar-navigation-link">
        <p>Today's Deals</p>
      </div>
      <div className="navbar-navigation-link">
        <p>customer Service</p>
      </div>
      <div className="navbar-navigation-link">
        <p>Registry</p>
      </div>
      <div className="navbar-navigation-link">
        <p>Gift Cards</p>
      </div>
      <div className="navbar-navigation-link">
        <p>Sell</p>
      </div>
    </nav>
  )
}
