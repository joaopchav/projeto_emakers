import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="../src/assets/imagem2.png" alt="Logo" className="footer-logo-img" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/lançamentos">Lançamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/populares">Populares</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/generos">Gêneros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promoção">Promoção</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/conta">Conta</Link>
            </li>
            <li className="nav-item">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
