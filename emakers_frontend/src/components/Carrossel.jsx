import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carrossel = ({ id, items, isLancamentos }) => (
  <div id={id} className={`carousel slide mt-4 mx-auto ${isLancamentos ? 'carrossel-lançamentos-custom' : 'carrossel-custom'}`} data-bs-ride="carousel">
    <div className="carousel-indicators">
      {items.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>

    <div className="carousel-inner">
      {items.map((item, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <div className={isLancamentos ? "d-flex justify-content-between" : "carousel-slide-container"}>
            {isLancamentos ? (
              items.map((lancamento, idx) => (
                <div key={idx} className="carousel-slide-container">
                  <img src={lancamento.imagem} className="carrossel-imagem-lançamento" alt={`Jogo ${idx + 1}`} />
                  <div className="price-tags-lançamento">
                    <div className="preço-atual-lançamento">{lancamento.preco}</div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <img src={item.imagem} className="carrossel-imagem" alt={`Jogo ${index + 1}`} />
                <div className="price-tags">
                  <div className="desconto">{item.desconto}</div>
                  <div className="preço-atual">{item.preco}</div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target={`#${id}`}
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target={`#${id}`}
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
);

export default Carrossel;
