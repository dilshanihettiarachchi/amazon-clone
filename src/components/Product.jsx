import { useStateValue } from '../StateProvider';
import StarRateIcon from '@mui/icons-material/StarRate';
import '../styles/Product.css';

export default function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        image,
        rating
      }
    })
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title.length <= 100 ? title : `${title.slice(0, 100)}...`}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {
            Array(rating).fill().map((_) => (
             <p><StarRateIcon className="product-rate-icon" /></p>
            ))
          }
        </div>
      </div>
      <img src={image} alt="Product image"  />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}
