import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Reservacion = () => {
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
    </>
  );
};
