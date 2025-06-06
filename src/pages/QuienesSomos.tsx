import React from 'react'
import { CiShirt } from "react-icons/ci";
import { GiRunningShoe,GiClothes} from "react-icons/gi";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container py-4 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="mt-4 col-12 col-lg-10">
            {/* Hero Section */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3 titulo ">BetweenHills</h1>
              <p className="lead">Ropa deportiva auténtica de la NBA, NFL, MLB, NHL y más</p>
            </div>

            {/* Nuestra Historia */}
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4 text-center titulo">Nuestra Historia</h2>
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <img 
                      src="/images/store-origin.jpg" 
                      alt="Inicios del emprendimiento"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <p>
                      Todo comenzó como una pasión por la cultura deportiva americana y la búsqueda de prendas auténticas 
                      que no se encontraban fácilmente en nuestro mercado.
                    </p>
                    <p>
                      Lo que empezó como un pequeño proyecto entre amigos, hoy se ha convertido en un referente para los 
                      amantes de los deportes americanos, ofreciendo jerseys, camisetas y próximamente zapatillas de 
                      ediciones limitadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Qué Ofrecemos */}
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4 text-center titulo">Qué Ofrecemos</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="text-center p-3 h-100">
                      <div className="mb-3">
                        <CiShirt size="2em"/>
                      </div>
                      <h4>Ropa Deportiva Original</h4>
                      <p>
                        Jerseys, camisetas y merch oficial de las principales ligas deportivas de Estados Unidos.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="text-center p-3 h-100">
                      <div className="mb-3">
                        <GiRunningShoe size="2em"/>
                      </div>
                      <h4>Próximamente: Zapatillas</h4>
                      <p>
                        Estamos preparando nuestro catálogo de sneakers deportivos y urbanos.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="text-center p-3 h-100">
                      <div className="mb-3">
                        <GiClothes size="2em"/>
                      </div>
                      <h4>Feria Americana</h4>
                      <p>
                        Sección especial con prendas vintage y usadas en excelente estado a precios accesibles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuestra Misión */}
            <div className="card mb-4 border-0 bg-white">
              <div className="card-body p-4">
                <h2 className="mb-4 text-center titulo">Nuestra Misión</h2>
                <p>
                  Queremos acercar la auténtica cultura deportiva americana a nuestros clientes, ofreciendo productos 
                  de calidad que normalmente serían difíciles de conseguir, a precios justos y con un servicio personalizado.
                </p>
                <p className="mb-0">
                  Cada prenda en nuestro catálogo es seleccionada cuidadosamente para garantizar autenticidad y calidad.
                </p>
              </div>
            </div>

            {/* CTA */}
            {/* <div className="text-center mt-5">
              <button 
                className="btn btn-outline-primary btn-lg px-4 me-2 "
                onClick={(e) => {
                  e.stopPropagation()
                  onContact()
                }}
              >
                Contáctanos
              </button>
              <a href="/products" className="btn btn-primary btn-lg px-4">
                Ver Catálogo
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs