import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import type { Product } from '../types'
import Modal from '../components/Modal'
import productsData from '../data/productsData'

const WHATSAPP_NUMBER = '2494381315'

const Productos: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('Todas')
  const [nameFilter, setNameFilter] = useState('')
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  // Obtener categorías únicas para el select
  const categories = Array.from(
    new Set(productsData.map(p => p.category))
  ).sort()

  // Filtrado combinado por categoría y nombre
  const filteredProducts = productsData.filter(product => {
    const matchCategory =
      categoryFilter === 'Todas' || product.category === categoryFilter
    const matchName = product.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase())
    return matchCategory && matchName
  })

  const handleConsult = (product: Product) => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en la prenda "${product.name}". ¿Podrían darme más información?`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  const handleOpenModal = (product: Product) => {
    setModalProduct(product)
  }

  const handleCloseModal = () => {
    setModalProduct(null)
  }

  return (
    <div>
      <Header />
      <h1>Stock disponible</h1>

      <div style={{ marginBottom: '1rem', maxWidth: '320px', display: 'flex', gap: '0.5rem' }}>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          style={{ flex: 1, padding: '0.5rem' }}
        >
          <option value="Todas">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
          style={{ flex: 2, padding: '0.5rem' }}
        />
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onConsult={handleConsult}
              onOpenModal={handleOpenModal}
            />
          ))
        ) : (
          <p>No se encontraron productos para el filtro.</p>
        )}
      </div>

     {modalProduct && (
        <Modal
          product={modalProduct}
          onClose={handleCloseModal}
          onConsult={handleConsult}  // <--- Aquí
        />
      )}
    </div>
  )
}

export default Productos
