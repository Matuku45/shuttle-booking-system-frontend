import React, { useState, useEffect } from 'react';

import img1 from '../components/imgs/picture1.webp';
import img2 from '../components/imgs/picture2.webp';
import img3 from '../components/imgs/picture3.webp';

const images = [img1, img2, img3];

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

  const handleError = () => {
    setError(true);
    setCurrent((prev) => (prev + 1) % images.length);
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

  const carousel = {
    width: '100%',
    maxWidth: '700px',
    height: '340px',
    marginBottom: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(69,123,157,0.18)',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
    background: '#eee',
    transition: 'opacity 0.5s',
    boxShadow: '0 2px 12px rgba(69,123,157,0.12)',
    display: error ? 'none' : 'block',
  };

  const indicatorContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '16px',
  };

  const indicatorDot = (active) => ({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: active ? '#457b9d' : '#bfc9d6',
    border: active ? '2px solid #1d3557' : '2px solid #e0eafc',
    transition: 'background 0.3s, border 0.3s',
    boxShadow: active ? '0 2px 8px rgba(69,123,157,0.15)' : 'none',
  });

  return (
    <div style={container}>
      <h1 style={title}>Welcome to Shuttle Booking System</h1>
      <p style={subtitle}>
        Book your shuttle easily and manage your trips with convenience.
      </p>
      <div style={carousel}>
        <img
          src={images[current]}
          alt={`Shuttle ${current + 1}`}
          style={imgStyle}
          onError={handleError}
        />
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
            borderRadius: '24px'
          }}>
            Image not found. Showing next image...
          </div>
        )}
      </div>
      <div style={indicatorContainer}>
        {images.map((_, idx) => (
          <div key={idx} style={indicatorDot(idx === current)} />
        ))}
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
          background: '#f1faee',
          padding: '12px 32px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(69,123,157,0.10)',
          transition: 'background 0.2s',
        }}
      >
        Register to book your flight
      </a>
    </div>
  );
};

export default Home;