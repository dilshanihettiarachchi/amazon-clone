import { useStateValue } from '../StateProvider';
import '../styles/CheckoutProduct.css';

export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} />
      <div className="checkout-product-info">
        <div className="checkout-product-title-price">
          <p className="checkout-product-title">{title.length <= 100 ? title : `${title.slice(0, 100)}...`}</p>
          <div className="checkout-product-price">
            <p>
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
        <div className="checkout-product-rating">
          {Array(rating).fill().map((_) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromCart}>Remove from basket</button>
      </div>
    </div>
  )
}
