import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Reservas = () => {
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
  
    <section className="homereservas" id="homereservas">
      <div className="contenido">
        <h3>Reservacion</h3>
        <h1>¿Listo para tu próxima aventura? Reserva tu lugar en nuestras excursiones por el Parque Nacional El Ávila. 
            Asegura tu cupo y prepárate para explorar paisajes impresionantes y crear recuerdos inolvidables. 
            ¡No esperes más, haz tu reservación ahora y únete a nosotros en esta experiencia única!</h1>
        <p></p>
      </div>
    </section>
    
    <section className="espacio">
      <h1 className="barra">
        <span></span>
      </h1>
    </section>
  
    <section className="contactoreserva">
      <section className='textoreserva'>
        <div className="contactoR1">
          <h3>Si estas listo para reservar tu expedicion</h3>
        </div>
        <div className="contactoR2">
          <h3>escribenos para conocer tu disponibilidad</h3>
          </div>
        </section>
      <div className='datosreserva'>
        <div class="formulario">
          <div class="campo">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre"></input>
              
          </div>
          <div class="campo">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" name="email"></input>
          </div>
          <div class="campo">
              <label for="telefono">Número de teléfono</label>
              <input type="tel" id="telefono" name="telefono"></input>
          </div>
          <div class="campo">
              <label>Selecciona</label>
              <div class="opciones">
                  <label className='opciones'>
                      <input type="checkbox" name="contactos"></input>
                      Consiento el tratamiento de mis datos personales para los fines y en las condiciones descritas en privacy policy
                  </label>
              </div>
          </div>
          <div class="campo">
              <button className='button' type="submit">Evaluar</button>
          </div>
      </div>
      </div>
      </section>
  
      
  
      <section className="inforeservas">
      <div className="infotexto">
        <div className='naranja'>
          <h4>Sabas Nieves</h4>
          <h4>$5.00</h4>
        </div>
        <div className='blanco'>
        <div><img src="Imagenes/Sabas-Nieves.jpg" className="imagen" /></div>
          <div className='cuadroblanco'>
            <p>Meta: <p1>Sabas Nieves</p1></p>
            <p>Dificultad: <p1>Moderada</p1></p>
            <p>Desnivel: <p1>356 m</p1></p>
            <p>Tiempo: <p1>1hr 55min</p1></p>
          </div>
          <div className='paypal'>
          <button className='button'><img src="Imagenes/logo-paypal.png" className="imagenlogos" /></button>

            <button className='masmenos'>+</button><div className='numero'>0</div><button className='masmenos'>-</button>

          </div>
        </div>
        </div>
        <div className='infotexto'>
        <div className='naranja'>
          <h4>Humboldt</h4>
          <h4>$10.00</h4>
        </div>
        <div className='blanco'>
          <div><img src="Imagenes/humboldt.png" className="imagen" /></div>
          <div className='cuadroblanco'>
          <p>Meta: <p1>Humboldt</p1></p>
            <p>Dificultad: <p1>Dificil</p1></p>
            <p>Desnivel: <p1>1177 m</p1></p>
            <p>Tiempo: <p1>3hr 14min</p1></p>
          </div>
          <div className='paypal'>
          <button className='button'><img src="Imagenes/logo-paypal.png" className="imagenlogos" /></button>

            <button className='masmenos'>+</button><div className='numero'>0</div><button className='masmenos'>-</button>
          </div>
          
          </div>
        </div>
    </section>

    <section className="inforeservas">
      <div className="infotexto">
        <div className='naranja'>
          <h4>Pico Oriental</h4>
          <h4>$15.00</h4>
        </div>
        <div className='blanco'>
        <div><img src="Imagenes/pico-oriental.png" className="imagen" /></div>
          <div className='cuadroblanco'>
          <p>Meta: <p1>Pico Oriental</p1></p>
            <p>Dificultad: <p1>Dificil</p1></p>
            <p>Desnivel: <p1>1619 m</p1></p>
            <p>Tiempo: <p1>4hr 12min</p1></p>
          </div>
          <div className='paypal'>
          <button className='button'><img src="Imagenes/logo-paypal.png" className="imagenlogos" /></button>

            <button className='masmenos'>+</button><div className='numero'>0</div><button className='masmenos'>-</button>

          </div>
        </div>
        </div>
        <div className='infotexto'>
        <div className='naranja'>
          <h4>Pico Naiguata</h4>
          <h4>$20.00</h4>
        </div>
        <div className='blanco'>
          <div><img src="Imagenes/pico-naiguata.png" className="imagen" /></div>
          <div className='cuadroblanco'>
          <p>Meta: <p1>Pico Naiguata</p1></p>
            <p>Dificultad: <p1>Dificil</p1></p>
            <p>Desnivel: <p1>1848 m</p1></p>
            <p>Tiempo: <p1>9hr 21min</p1></p>
          </div>
          <div className='paypal'>
            <button className='button'><img src="Imagenes/logo-paypal.png" className="imagenlogos" /></button>
            <button className='masmenos'>+</button><div className='numero'>0</div><button className='masmenos'>-</button>
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
