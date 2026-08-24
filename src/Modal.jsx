import { formatPrice } from './utils.js'
import './Modal.css'

function Modal({ cart, onStartNewOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <img className="modal-icon" src="./assets/images/icon-order-confirmed.svg" alt="" />
        <h2 id="modal-title">Order Confirmed</h2>
        <p className="modal-subtitle">We hope you enjoy your food!</p>

        <div className="modal-summary">
          <ul className="modal-items">
            {cart.map((item) => (
              <li className="modal-item" key={item.name}>
                <img src={item.image.thumbnail} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.quantity}x @ {formatPrice(item.price)}</p>
                </div>
                <span className="modal-item-total">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="modal-total">
            <p>Order Total</p>
            <p className="modal-total-amount">{formatPrice(total)}</p>
          </div>
        </div>

        <button type="button" className="start-new-order" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Modal
