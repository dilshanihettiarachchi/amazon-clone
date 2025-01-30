import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import '../styles/Checkout.css';

export default function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
          {cart?.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is Empty</h2>
              <p>
                You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
          <div>
            <div className="checkout-header">
              <h2 className="checkout-title">Shopping Cart</h2>
              <div className="checkout-price">
                <p>Price</p>
              </div>
            </div>
            {cart.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          )}
      </div>
      {cart.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}
