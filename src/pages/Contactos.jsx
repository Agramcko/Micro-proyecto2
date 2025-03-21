import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faMailForward, faMailReplyAll, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Contactos = () => {
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
          <a href="/Experiencias">Experiencias</a>
          <a href="/destinos">Destinos</a>
          <a href="/Reservas">Reservas</a>
          <a href="/contactos">Contacto</a>
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

      <section className="homecontactos" id="homecontactos">
        <div className="contenido">
          <h3>Contactos/ <span> Inicio </span></h3>
          <p>No dudes en contactarnos, estámos para ayudarte
            con cualquier tipo de inquietudes y dudas que tengas, solo déjanos saberlo!
          </p>
        </div>
      </section>

      <section className="espacio">
        <h1 className="barra">
          <span></span>
        </h1>
      </section>

      <section className="contactos" id="contactos">
        <div className= "container">
          <div className="left-half">
            <h1>CONTÁCTANOS</h1>
            <p>Estámos para ayudarte</p>
            <div className="contact-box">
              <div className="phone-icon-text">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span className= "text">+58 424 123 4567</span>
              </div>
              <div className="mail-icon-text">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span className= "text">AvilaTours@correo.unimet.edu.ve</span>
              </div>
              
            </div>            
          </div>

          <div className="right-half">
            <h2>ESCRIBENOS!</h2>
            <p1>Dejanos saber tus inquietudes</p1>
            <div classsName= "commentcontactos">
              <form>
                <input
                type="text" 
                name='nombre'
                id='nombre'
                placeholder='Nombre' 
                />
              </form>

              <form>
                <input 
                type="email"
                name="correo"
                id="correo" 
                placeholder='Correo Electronico'
                />
              </form>

              <form>
                <input 
                type="tlf"
                name='telefono'
                id='telefono'
                placeholder='Numero de Telefono'
                />
              </form>
                
              <form>
                <textarea 
                name="mensaje" 
                id="mensaje"
                placeholder='Mensaje'>

                </textarea>
              </form>

              <form>
                <button type="submit">Enviar</button>

              </form>

                

                

                
             
            </div>
            </div>
        </div>
      </section>

      <section className="espacio">
        <h1 className="barra">
          <span></span>
        </h1>
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