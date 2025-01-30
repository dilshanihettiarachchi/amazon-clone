import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import '../styles/Header.css';

export default function Header() {
  const [{ cart }] = useStateValue();

  return (
    <header className="header">
      <Link to="/">
        <img 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon logo" 
          className="header-logo" 
        />
      </Link>
      <div className="header-delivery-info">
        <LocationOnOutlinedIcon className="header-location-icon" />
        <div className="header-option header-option-one">
          <span className="header-option-line-one">Deliver to</span>
          <span className="header-option-line-two">Sri Lanka</span>
        </div>
      </div>
      <div className="header-search">
        <input 
          type="search" 
          className="header-search-input" 
          placeholder="Search Amazon"
        />
        <button className="header-search-button">
          <SearchIcon className="header-search-icon"/>
        </button>
      </div>
      <div className="header-nav">
        <Link to="/login" className="header-link">
          <div className="header-option header-option-two">
            <span className="header-option-line-one">Hello, username</span>
            <span className="header-option-line-two">Account</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option header-option-three">
            <span className="header-option-line-one">Returns</span>
            <span className="header-option-line-two">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link header-link-cart">
          <div className="header-cart">
            <div className="header-cart-icon-count">
              <span className="header-cart-count">{cart?.length || 0}</span>
              <ShoppingCartOutlinedIcon />
            </div>
            <span className="header-cart-text">Cart</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
