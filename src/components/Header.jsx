import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Header.css';

export default function Header() {
  const [{ cart }] = useStateValue();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <button className="header-menu-icon">
          <MenuIcon />
        </button>
        <Link to="/">
          <img 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon logo" 
            className="header-logo" 
          />
        </Link>
      </div>
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
        {user ? (
          <Link to="/" className="header-link header-link-account">
            <div className="header-option header-option-two">
              <span className="header-option-line-one">Hello, {user.displayName}</span>
              <span className="header-option-line-two" onClick={() => signOut(auth)}>Sign Out</span>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="header-link header-link-account">
            <div className="header-option header-option-two">
              <span className="header-option-line-one">Hello, Guest</span>
              <span className="header-option-line-two">Sign In</span>
            </div>
          </Link>
        )}
        <Link to="/" className="header-link header-link-return">
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
