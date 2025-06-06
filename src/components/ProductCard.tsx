import React from 'react'
import type { Product } from '../types'

interface Props {
  product: Product
  onConsult: (product: Product) => void
  onOpenModal: (product: Product) => void
}

const ProductCard: React.FC<Props> = ({ product, onConsult, onOpenModal }) => (
  <div className="product-card" onClick={() => onOpenModal(product)}>
    <img src={product.images[0]} alt={product.name} />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="price">${product.price}</div>
      <button
        className="btn-consult"
        onClick={e => {
          e.stopPropagation()
          onConsult(product)
        }}
      >
        Consultar/Reservar
      </button>
    </div>
  </div>
)

export default ProductCard
