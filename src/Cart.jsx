import { formatPrice } from './utils.js'
import './Cart.css'

function Cart({ cart, onRemove, onConfirm}) {

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="cart">
      <h2>Your Cart ({totalQuantity})</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
        <ul className="cart-items">
          {cart.map((item) => (
            <li className="cart-item" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p className="cart-item-meta">
                  {item.quantity}x @ {formatPrice(item.price)}
                  <span className="cart-item-total">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </p>
              </div>
              <button
                type="button"
                className="remove-item"
                aria-label={`Remove ${item.name} from cart`}
                onClick={() => onRemove(item.name)}
              >
                <img src="/assets/images/icon-remove-item.svg" alt="" />
              </button>
            </li>
          ))}
        </ul>

        <div className="cart-total">
            <p>Order Total</p>
            <p className="cart-total-amount">{formatPrice(total)}</p>
        </div>

        <p className="carbon-note">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            This is a <strong>carbon-neutral</strong> delivery
        </p>

        <button type="button" className="confirm-order" onClick={onConfirm}>
        Confirm Order
        </button>
        </>
      )}
    </aside>
  )
}

export default Cart