import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import type { Product } from '../types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface ModalProps {
  product: Product
  onClose: () => void
  onConsult: (product: Product) => void
}

const Modal: React.FC<ModalProps> = ({ product, onClose, onConsult }) => {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            borderRadius: 8,
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            overflow: 'auto',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontSize: 40,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: '#333',
              fontWeight: 'bold',
              lineHeight: 1,
              zIndex: 10,
            }}
            aria-label="Cerrar modal"
          >
            &times;
          </button>

          {/* Área de imágenes */}
          <div
            style={{
              flex: isMobile ? 'none' : '1 1 60%',
              width: isMobile ? '100%' : '60%',
              padding: '1rem',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
          >
            <Carousel
              showThumbs
              infiniteLoop
              showStatus={false}
              dynamicHeight={false}
              onClickItem={(index) => setZoomedImg(product.images[index])}
            >
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    maxHeight: 200,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <img
                    src={img}
                    alt={`${product.name} imagen ${idx + 1}`}
                    style={{
                      objectFit: 'contain',
                      maxHeight: 400,
                      maxWidth: '100%',
                      userSelect: 'none',
                    }}
                  />
                </div>
              ))}
            </Carousel>
            <small
              style={{
                display: 'block',
                marginTop: 8,
                color: '#666',
                fontStyle: 'italic',
                cursor: 'pointer',
              }}
            >
              Haz clic en la imagen para verla en detalle
            </small>
          </div>

          {/* Área de información */}
          <div
            style={{
              flex: isMobile ? 'none' : '1 1 40%',
              width: isMobile ? '100%' : '40%',
              padding: '1rem',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h2 style={{ marginTop: 0, wordBreak: 'break-word' }}>{product.name}</h2>
               {/* Condición del producto */}
                    <p
                      style={{
                        fontWeight: 'bold',
                        color: '#888',
                        marginBottom: '0.5rem',
                        textTransform: 'capitalize',
                      }}
                    >
                      Condición: {product.condition}
                    </p>
              <p style={{ color: '#444', lineHeight: 1.5, wordBreak: 'break-word' }}>
                {product.description}
              </p>
              {/* Mostrar el sport si está presente */}
              {product.sport ? (
                <p className="product-sport"><strong>Sport:</strong> {product.sport}</p>
              ) : (
                <p className="product-sport"><strong>Sport:</strong> No especificado</p>
              )}

            </div>

            <div>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  color: '#1db954',
                  marginBottom: '1rem',
                }}
              >
                ${product.price}
              </p>
              <button
                className="btn-consult"
                onClick={(e) => {
                  e.stopPropagation()
                  onConsult(product)
                }}
                style={{
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#1db954',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Consultar/Reservar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal zoom imagen */}
      {zoomedImg && (
        <div
          className="zoomed-overlay"
          onClick={() => setZoomedImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            cursor: 'zoom-out',
            padding: '1rem',
          }}
          aria-label="Imagen ampliada"
        >
          <img
            src={zoomedImg}
            alt="Imagen ampliada"
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: 'contain',
              boxShadow: '0 0 15px rgba(255,255,255,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Modal
