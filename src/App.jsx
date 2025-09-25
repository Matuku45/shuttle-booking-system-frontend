import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AppRoutes from './path/AppRoutes';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <Header
        onAboutClick={() => setShowAbout(true)}
        onSignUpClick={() => setShowSignUp(true)}
        onSignInClick={() => setShowLogin(true)}
      />
      <AppRoutes />
      {showAbout && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(69,123,157,0.10)',
              padding: '0',
              maxWidth: '850px',
              width: '95%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 22,
                background: '#457b9d',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 2
              }}
              aria-label="Close"
            >
              ×
            </button>
            <About />
          </div>
        </div>
      )}
      {showSignUp && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(69,123,157,0.10)',
              padding: '0',
              maxWidth: '500px',
              width: '95%',
              maxHeight: '95vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={() => setShowSignUp(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 22,
                background: '#457b9d',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 2
              }}
              aria-label="Close"
            >
              ×
            </button>
            <SignUp />
          </div>
        </div>
      )}
      {showLogin && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(69,123,157,0.10)',
              padding: '0',
              maxWidth: '650px',
              width: '95%',
              maxHeight: '95vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 22,
                background: '#457b9d',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 2
              }}
              aria-label="Close"
            >
              ×
            </button>
            <Login
              onSignUpClick={() => {
                setShowLogin(false);
                setShowSignUp(true);
              }}
              onForgotPasswordClick={() => alert('Password recovery coming soon!')}
            />
          </div>
        </div>
      )}
      {!showAbout && !showSignUp && !showLogin && <Footer />}
    </div>
  );
}

export default App;