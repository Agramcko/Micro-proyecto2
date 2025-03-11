import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');
    const menuBtn = document.querySelector('#menu-btn');
    const searchBtn = document.querySelector('#search-btn');

    const handleMenuClick = () => {
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
    };

    const handleSearchClick = () => {
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
    };

    const handleScroll = () => {
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
    };

    menuBtn.addEventListener('click', handleMenuClick);
    searchBtn.addEventListener('click', handleSearchClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      searchBtn.removeEventListener('click', handleSearchClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const handleUserIconClick = () => {
    navigate('/Registrohome');
    };

    return (
      <>
        <header className="header">
          <a href="#" className="logo">
            <img src="Imagenes/AvilaTours.png" alt="Foto de logo" className="imagenlogo" />
          </a>
          <nav className="navbar">
            <a href="/home">Inicio</a>
            <a href="#Experiencias">Experiencias</a>
            <a href="/destinos">Destinos</a>
            <a href="#Reservas">Reservas</a>
            <a href="#Contacto">Contacto</a>
          </nav>

          <div className="icons">
            <FontAwesomeIcon icon={faSearch} className="fas fa-search -bnt" id="search-btn" />
            <FontAwesomeIcon icon={faUser} className="fas fa-user -bnt" id="user-btn" onClick={handleUserIconClick} />
            <FontAwesomeIcon icon={faBars} className="fas fa-bars -bnt" id="menu-btn" />
          </div>

          <div className="search-form">
            <input type="search" id="search-box" placeholder="Search here..." />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </div>
        </header>

        <section className="home" id="home">
          <div className="contenido">
            <h3>AvilaTours</h3>
            <p>
              Excursiones en la naturaleza de nuestro parque nacional el Ávila. Explora el Parque Nacional el Ávila
              con nuestras emocionantes excursiones: rutas, información y curiosidades al alcance de todos los estudiantes
              de la Universidad Metropolitana.
            </p>
          </div>
        </section>

        <section className="cuadrado" id="cuadrado">
          <div className="grid-container">
            <div className="card">
              <h2>¿Cuál destino?</h2>
              <p>
                ¿Cuál destino? Explora las maravillas del Parque Nacional El Ávila. Descubre las rutas y paisajes que te
                esperan.
              </p>
            </div>

            <div className="card">
              <h2>Vivir la experiencia</h2>
              <p>
                Sumérgete en una aventura única. Naturaleza, aire fresco y momentos inolvidables te esperan.
              </p>
            </div>

            <div className="card">
              <h2>Haz tu reservación</h2>
              <p>No pierdas la oportunidad. Reserva ahora y asegura tu lugar en la próxima excursión.</p>
            </div>
          </div>
        </section>

        <section className="mision" id="mision">
          <div className="contenido">
            <h3>Misión</h3>
            <p>
              En AvilaTours, nos dedicamos a conectar a los estudiantes de la Universidad Metropolitana con la naturaleza,
              a través de emocionantes excursiones en el Parque Nacional el Ávila.
            </p>
          </div>
        </section>

        <section className="espacio">
          <h1 className="barra">
            <span></span>
          </h1>
        </section>

        <section className="vision" id="vision">
          <div className="contenido">
            <h3>Visión</h3>
            <p>
              Ser la plataforma líder en la promoción de actividades al aire libre para estudiantes universitarios,
              inspirando a las nuevas generaciones a valorar y proteger nuestro entorno natural.
            </p>
          </div>
        </section>

        <section className="espacio">
          <h1 className="barra">
            <span></span>
          </h1>
        </section>

        <section className="objetivos" id="objetivos">
          <div className="contenido">
            <h3>objetivos</h3>
            <p>Promover actividades al aire libre entre los estudiantes.</p>
            <p>Fomentar el respeto y la protección del medio ambiente.</p>
            <p>Crear una comunidad de amantes de la naturaleza.</p>
          </div>
        </section>

        <section className="footer">
          <div className="redes">
            <a href="#" className="fab fa-facebook-f">
              <FontAwesomeIcon icon={faFacebookF} id='facebook' /></a>
            <a href="#" className="fab fa-twitter">
              <FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="fab fa-youtube">
              <FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="fab fa-instagram">
              <FontAwesomeIcon icon={faInstagram} /></a>
          </div>

          <div className="creditos">
            Copyright © 2025 - <span>Universidad Metropolitana.</span> Todos los derechos reservados. | Privacy Policy |
            Cookie Policy
          </div>
        </section>
      </>
    );

  };