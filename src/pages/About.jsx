import React from 'react';

const container = {
  maxWidth: '700px',
  margin: '40px auto',
  background: 'linear-gradient(135deg, #f1faee 0%, #e0eafc 100%)',
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(69,123,157,0.10)',
  padding: '32px 24px',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  color: '#1d3557',
};

const title = {
  fontSize: '2.2rem',
  fontWeight: 'bold',
  marginBottom: '18px',
  letterSpacing: '1px',
  color: '#457b9d',
  textAlign: 'center',
};

const sectionTitle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  margin: '24px 0 12px 0',
  color: '#1d3557',
};

const list = {
  marginLeft: '24px',
  marginBottom: '18px',
  fontSize: '1.05rem',
  color: '#22223b',
};

const highlight = {
  background: '#a8dadc',
  borderRadius: '6px',
  padding: '2px 8px',
  fontWeight: 'bold',
  color: '#1d3557',
};

const About = () => (
  <div style={container}>
    <div style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>🚌</div>
    <h1 style={title}>About Us</h1>
    <p>
      Our Shuttle Booking System is designed to make your travel planning <span style={highlight}>simple</span>, <span style={highlight}>fast</span>, and <span style={highlight}>reliable</span>.
    </p>

    <h2 style={sectionTitle}>How the Booking System Works</h2>
    <ol style={list}>
      <li>
        <strong>Sign In:</strong> Passengers must log in or create an account to make a booking.
      </li>
      <li>
        <strong>Search for a Shuttle:</strong> Choose your departure location, destination, and travel date.
      </li>
      <li>
        <strong>View Available Shuttles:</strong> The system displays all scheduled shuttles for the selected day, including:
        <ul style={{ marginLeft: '18px', marginTop: '6px' }}>
          <li>Departure time</li>
          <li>Number of available seats</li>
          <li>Price per seat</li>
        </ul>
      </li>
      <li>
        <strong>Select and Book:</strong> Choose your preferred shuttle and number of seats. Confirm your booking.
      </li>
      <li>
        <strong>Make Payment:</strong> Pay securely online via integrated payment gateways.
      </li>
      <li>
        <strong>Confirmation:</strong> Once payment is successful, your booking is confirmed and stored in your profile.<br />
        You may receive an optional email confirmation.
      </li>
    </ol>

    <h2 style={sectionTitle}>Why Choose Us?</h2>
    <ul style={list}>
      <li>
        <strong>Scheduled Service:</strong> Our shuttles run on fixed schedules for your convenience.
      </li>
      <li>
        <strong>Real-Time Availability:</strong> Seat availability updates automatically after each booking.
      </li>
      <li>
        <strong>Secure Payments:</strong> All transactions are processed through trusted payment gateways.
      </li>
      <li>
        <strong>User-Friendly Interface:</strong> Enjoy a smooth and easy booking experience.
      </li>
    </ul>
  </div>
);

export default About;