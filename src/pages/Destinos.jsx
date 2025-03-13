import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';

export const Destinos = () => {
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

            <section className="homedestino" id="homedestino">
                <div className="contenido">
                    <h3>Destinos</h3>
                    <p>
                        Explora nuestras emocionantes rutas de excursión en el Parque Nacional El Ávila. Cada ruta está cuidadosamente diseñada para ofrecerte una experiencia única y memorable. Descubre detalles sobre la dificultad, duración y puntos de interés de cada recorrido.
                    </p>
                </div>
            </section>

            <section className="espacio">
                <h1 className="barra">
                    <span></span>
                </h1>
            </section>

            <section className="sabasnieves" id="sabasnieves">
                <div className="contenido">
                    <h3>Sabas Nieves</h3>
                    <img src="Imagenes/sabasnieves.webp" alt="Sabas Nieves" />
                    <p>Rutas diarias</p>
                    <p>Meta: Sabas Nieves</p>
                    <p>Dificultad: Moderada</p>
                    <p>Desnivel: 356 m</p>
                    <p>Tiempo: 1 hr 55 min</p>
                </div>
            </section>

            <section className="espacio">
                <h1 className="barra">
                    <span></span>
                </h1>
            </section>

            <section className="humboldt" id="humboldt">
                <div className="contenido">
                    <h3>Humbolt</h3>
                    <img src="Imagenes/humbolt.webp" alt="Sabas Nieves" />
                    <p>Rutas diarias</p>
                    <p>Meta: Humboldt</p>
                    <p>Dificultad: Difícil</p>
                    <p>Desnivel: 1177 m </p>
                    <p>Tiempo: 3 hr 14 min</p>
                </div>
            </section>

            <section className="espacio">
                <h1 className="barra">
                    <span></span>
                </h1>
            </section>

            <section className="Picooriental" id="Picooriental">
                <div className="contenido">
                    <h3>Pico Oriental</h3>
                    <img src="Imagenes/pico-oriental.webp" alt="Sabas Nieves" />
                    <p>Rutas diarias</p>
                    <p>Meta: Pico Oriental</p>
                    <p>Dificultad: Difícil</p>
                    <p>Desnivel: 1619 m  </p>
                    <p>Tiempo: 4 hr 12 min</p>
                </div>
            </section>

            <section className="espacio">
                <h1 className="barra">
                    <span></span>
                </h1>
            </section>

            <section className="piconaiguata" id="piconaiguata">
                <div className="contenido">
                    <h3>Pico Naiguata</h3>
                    <img src="Imagenes/Naiguata.webp" alt="Sabas Nieves" />
                    <p>Rutas diarias</p>
                    <p>Meta: Pico Naiguatá</p>
                    <p>Dificultad: Difícil</p>
                    <p>Desnivel: 1848 m </p>
                    <p>Tiempo: 9 hr 21 min</p>
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