import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
