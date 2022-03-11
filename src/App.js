import './App.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';

function App() {
  return (
    <div className="App">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search"></div>
      <div className="header__nav">
        <div className="nav__item">
          <span classNmae="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span classNmae="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon/>
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
