import React, { useState, useEffect } from 'react';

import img1 from '../components/imgs/picture1.webp';
import img2 from '../components/imgs/picture2.webp';
import img3 from '../components/imgs/picture3.webp';

// Carousel images (use imported image variables)
const images = [img1, img2, img3];

// ===== Home Component =====
const Home = () => {
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setError(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current, error]);

  const nextImage = () => {
    setError(false);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setError(false);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleError = () => {
    setError(true);
    nextImage();
  };

  const container = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    textAlign: 'center',
    padding: '0 16px',
  };

  const title = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: '1rem',
    letterSpacing: '1px',
    textShadow: '0 2px 8px #cfdef3',
  };

  const subtitle = {
    fontSize: '1.3rem',
    color: '#457b9d',
    marginBottom: '2rem',
    fontWeight: '500',
  };

  const button = {
    padding: '12px 28px',
    fontSize: '1.1rem',
    backgroundColor: '#457b9d',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(69,123,157,0.15)',
    margin: '0 12px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    transition: 'background 0.2s',
  };

  const carousel = {
    width: '420px',
    height: '260px',
    marginBottom: '2rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '18px',
    boxShadow: '0 4px 18px rgba(69,123,157,0.18)',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '18px',
    background: '#eee',
    transition: 'opacity 0.5s',
    boxShadow: '0 2px 12px rgba(69,123,157,0.12)',
    display: error ? 'none' : 'block',
  };

  const navBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(69,123,157,0.7)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 2,
    boxShadow: '0 2px 8px rgba(69,123,157,0.15)',
    transition: 'background 0.2s',
  };

  return (
    <div style={container}>
      <h1 style={title}>Welcome to Shuttle Booking System</h1>
      <p style={subtitle}>
        Book your shuttle easily and manage your trips with convenience.
      </p>
      <div style={carousel}>
        <button
          style={{ ...navBtnStyle, left: '12px' }}
          onClick={prevImage}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <img
          src={images[current]}
          alt={`Shuttle ${current + 1}`}
          style={imgStyle}
          onError={handleError}
        />
        <button
          style={{ ...navBtnStyle, right: '12px' }}
          onClick={nextImage}
          aria-label="Next"
        >
          &#8594;
        </button>
        {error && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e63946',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRadius: '18px'
          }}>
            Image not found. Showing next image...
          </div>
        )}
      </div>
      <div>
        <button style={button} onClick={prevImage}>Previous</button>
        <button style={button} onClick={nextImage}>Next</button>
      </div>
      <a
        href="/signup"
        style={{
          display: 'inline-block',
          marginTop: '2.5rem',
          color: '#1d3557',
          fontWeight: 'bold',
          textDecoration: 'underline',
          fontSize: '1.2rem',
          letterSpacing: '0.5px',
        }}
      >
        Register to book your flight
      </a>
    </div>
  );
};

export default Home;