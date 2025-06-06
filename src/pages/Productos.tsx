import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import type { Product } from '../types'
import Modal from '../components/Modal'
import productsData from '../data/productsData'

const WHATSAPP_NUMBER = '2494381315'

const Productos: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('Todas')
  const [conditionFilter, setConditionFilter] = useState('Todas')
  const [sportFilter, setSportFilter] = useState('Todas')
  const [nameFilter, setNameFilter] = useState('')
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  // Obtener valores únicos
  const categories = Array.from(new Set(productsData.map(p => p.category))).sort()
  const conditions = Array.from(new Set(productsData.map(p => p.condition))).sort()
  const sports = Array.from(new Set(productsData.map(p => p.sport))).sort()

  // Ordenar por ID descendente (más nuevos primero)
  const sortedProducts = [...productsData].sort((a, b) => b.id - a.id)

  // Aplicar filtros
  const filteredProducts = sortedProducts.filter(product => {
    const matchCategory = categoryFilter === 'Todas' || product.category === categoryFilter
    const matchCondition = conditionFilter === 'Todas' || product.condition === conditionFilter
    const matchSport = sportFilter === 'Todas' || product.sport === sportFilter
    const matchName = product.name.toLowerCase().includes(nameFilter.toLowerCase())
    return matchCategory && matchCondition && matchSport && matchName
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

  const clearNameFilter = () => {
    setNameFilter('')
  }

  const resetAllFilters = () => {
    setCategoryFilter('Todas')
    setConditionFilter('Todas')
    setSportFilter('Todas')
    setNameFilter('')
  }

  return (
    <div>
      <Header />
      <h1>Stock disponible</h1>

      {/* Filtros */}
      <div
        style={{
          marginBottom: '1rem',
          maxWidth: '100%',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="Todas">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={conditionFilter}
          onChange={e => setConditionFilter(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="Todas">Todas las condiciones</option>
          {conditions.map(cond => (
            <option key={cond} value={cond}>
              {cond.charAt(0).toUpperCase() + cond.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={sportFilter}
          onChange={e => setSportFilter(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="Todas">Todos los deportes</option>
          {sports.map(sport => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>

        <div style={{ position: 'relative', flex: 1, minWidth: '180px' }}>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={nameFilter}
            onChange={e => setNameFilter(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', paddingRight: '2rem' }}
          />
          {nameFilter && (
            <button
              onClick={clearNameFilter}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              aria-label="Limpiar búsqueda"
            >
              ❌
            </button>
          )}
        </div>

        {/* Botón para resetear todos los filtros */}
        <button
          onClick={resetAllFilters}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ddd',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Resetear filtros
        </button>
      </div>

      {/* Productos filtrados */}
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

      {/* Modal */}
      {modalProduct && (
        <Modal
          product={modalProduct}
          onClose={handleCloseModal}
          onConsult={handleConsult}
        />
      )}
    </div>
  )
}

export default Productos
