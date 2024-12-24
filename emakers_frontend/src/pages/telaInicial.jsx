import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TelaInicial() {
  return (
    <div>
      <Navbar />

      <div className="carrosselPrincipal">
        <div
          id="carrosselPrincipal"
          className="carousel slide mt-4 mx-auto carrossel-custom"
          data-bs-ride="carousel"
        >

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carrosselPrincipal"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carrosselPrincipal"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carrosselPrincipal"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-slide-container">
                <img
                  src="../src/assets/jogo1.webp"
                  className="carrossel-imagem"
                />
                <div className="price-tags">
                  <div className="desconto">-15%</div>
                  <div className="preço-atual">R$ 169,90</div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-slide-container">
                <img
                  src="../src/assets/jogo2.jpg"
                  className="carrossel-imagem"
                  alt="Jogo 2"
                />
                <div className="price-tags">
                  <div className="desconto">-25%</div>
                  <div className="preço-atual">R$ 149,99</div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-slide-container">
                <img
                  src="../src/assets/jogo3.avif"
                  className="carrossel-imagem"
                  alt="Jogo 3"
                />
                <div className="price-tags">
                  <div className="desconto">-40%</div>
                  <div className="preço-atual">R$ 119,95</div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carrosselPrincipal"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carrosselPrincipal"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

      <div className="lançamentos">
        <div className="TituloLançamentos">Lançamentos</div>
          <div
            id="carrosselLançamentos"
            className="carousel slide mt-4 mx-auto carrossel-lançamentos-custom"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carrosselLançamentos"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carrosselLançamentos"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-between">
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo4.avif" className="carrossel-imagem-lançamento" alt="Jogo 1" />
                    <div className="price-tags-lançamento">     
                      <div className="preço-atual-lançamento">R$ 299,99</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo5.jpeg" className="carrossel-imagem-lançamento" alt="Jogo 2" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 249,99</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo6.jpg" className="carrossel-imagem-lançamento" alt="Jogo 3" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 229,90</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo7.jpg" className="carrossel-imagem-lançamento" alt="Jogo 4" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 279,90</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo8.jpg" className="carrossel-imagem-lançamento" alt="Jogo 5" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 299,99</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo4.avif" className="carrossel-imagem-lançamento" alt="Jogo 1" />
                    <div className="price-tags-lançamento">     
                      <div className="preço-atual-lançamento">R$ 299,99</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo5.jpeg" className="carrossel-imagem-lançamento" alt="Jogo 2" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 249,99</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo6.jpg" className="carrossel-imagem-lançamento" alt="Jogo 3" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 229,90</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo7.jpg" className="carrossel-imagem-lançamento" alt="Jogo 4" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 279,90</div>
                    </div>
                  </div>
                  <div className="carousel-slide-container">
                    <img src="../src/assets/jogo8.jpg" className="carrossel-imagem-lançamento" alt="Jogo 5" />
                    <div className="price-tags-lançamento">
                      <div className="preço-atual-lançamento">R$ 299,99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carrosselLançamentos"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carrosselLançamentos"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default TelaInicial;
