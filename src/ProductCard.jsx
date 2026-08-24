import { formatPrice } from './utils.js'
import './ProductCard.css'

function ProductCard({ product, onAdd, quantity, onDecrement}) {
  return (
    <article className="product-card">
      <div className="product-media">
        <picture>
          <source media="(min-width: 64rem)" srcSet={product.image.desktop} />
          <img src={product.image.mobile} alt={product.name} />
        </picture>

        {quantity === 0 ? (
          <button type="button" className="add-to-cart" onClick={() => onAdd(product)}>
          <img src="./assets/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
          </button>
        ) : (
          <div className="qty-stepper">
            <button type="button" aria-label="Decrease quantity" onClick={() => onDecrement(product.name)}>
              <img src="./assets/images/icon-decrement-quantity.svg" alt="" />
            </button>
            <span>{quantity}</span>
            <button type="button" aria-label="Increase quantity" onClick={() => onAdd(product)}>
              <img src="./assets/images/icon-increment-quantity.svg" alt="" />
            </button>
          </div>
        )}

      </div>
      <p className="product-category">{product.category}</p>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{formatPrice(product.price)}</p>
    </article>
  )
} 

export default ProductCard