import React from 'react'
import { CiShirt } from "react-icons/ci";
import { GiRunningShoe, GiClothes } from "react-icons/gi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import header from '../assets/header-background.jpg';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container py-4 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="mt-4 col-12 col-lg-10">

            {/* Hero Section */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3 titulo">Between Hills</h1>
              <p className="lead">
                En Between Hills ofrecemos ropa deportiva y streetwear con estilo americano. 
                Contamos con las mejores prendas de ligas como NHL, NFL, NBA, MLB y F1.
              </p>
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
                      <h4>Ropa Streetwear</h4>
                      <p>
                        Prendas urbanas y deportivas, incluyendo jerseys, camisetas y shorts de las principales ligas deportivas. 
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
                        Estamos preparando nuestro catálogo con las mejores zapas y la mejor calidad.
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

        
          {/* Cómo Funciona la Página */}
          <div className="card mb-4 border-0 bg-white">
            <div className="card-body p-4">
              <h2 className="mb-4 text-center titulo">¿Cómo funciona nuestra página?</h2>
              <ol className="mb-4 pl-4" style={{ listStyleType: 'decimal' }}>
                <li className="mb-3">
                  <strong>Si te gusta una prenda:</strong> presioná el botón de <em>Contactar por WhatsApp</em> que se encuentra en la prenda y hablamos para que puedas hacer consultas, pedir más info o hacer tu reserva.
                </li>
                <li className="mb-3">
                  <strong>Grupos de Predrops:</strong> son grupos donde compartimos prendas en preventa y novedades antes que en nuestras redes o tienda física.
                </li>
                <li className="mb-3">
                  <strong>Reserva y pago:</strong> para reservar abonas un 50% del total, y quien paga el 100% tiene prioridad para asegurarse la prenda. Se acepta transferencia y efectivo.
                </li>
                <li className="mb-3">
                  <strong>Tienda y Showroom:</strong> contamos con un showroom en Balcarce (con cita previa) para que puedas ver y probar las prendas personalmente.
                </li>
              </ol>

              <div className="mt-4">
                <h5 className="mb-2">¿Dónde nos encontramos y hacemos envíos?</h5>
                <p>
                  📍 Estamos ubicados en la zona de Balcarce, Tandil y alrededores.<br/>
                  🚚 Realizamos envíos.
                </p>
              </div>
            </div>
</div>

            {/* Nuestra Historia */}
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4 text-center titulo">Nuestra Historia</h2>
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <img 
                      src={header} 
                      alt="Inicios del emprendimiento"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <p>Inicialmente arrancamos con una feria física en la ciudad de Balcarce, y al gustar mucho la ropa y el estilo, se nos dio la posibilidad de conseguir prendas exclusivas y ampliar el nuestro catálogo con prendas nuevas y de calidad.</p>
                    <p>
                      Nuestra pasión por la ropa urbana y la cultura deportiva americana, nos llevo a burcar prendas auténticas y de buena calidad que no son fáciles de conseguir en el mercado local. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mb-3 text-center">Contacto y redes sociales</h3>
                <p className="text-center mb-4">
                  Seguinos en Instagram para no perderte ninguna novedad y unite a nuestro grupo de WhatsApp para enterarte antes que nadie.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://www.instagram.com/between.hills.clothes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-instagram d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill text-white"
                    style={{ backgroundColor: '#E4405F' }}
                  >
                    <FaInstagram size={20} /> Instagram
                  </a>

                  <a
                    href="https://chat.whatsapp.com/FNE4ejLzpgH6hF2v0mXcb2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-consult"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <FaWhatsapp size={20} /> Grupo WhatsApp
                  </a>
                </div>    

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
