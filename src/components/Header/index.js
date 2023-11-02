import './index.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => (
  <div className="header-container">
    <div className="header-responsive-container">
      <h1 className="restaurent-heading"> UNI Resto Cafe </h1>
      <div className="cart-container">
        <p className="cart-heading"> My Orders</p>
        <AiOutlineShoppingCart size={25} />
      </div>
    </div>
  </div>
)

export default Header
