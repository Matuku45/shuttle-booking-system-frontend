import React, { useState } from 'react';
import flightImage from '../components/imgs/flight.jpeg';

const mainColor = "#1d4ed8";
const accentColor = "#457b9d";

const Login = ({ onSignUpClick, onForgotPasswordClick }) => {
  const [form, setForm] = useState({ username: "", password: "", role: "booker" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, Arial, sans-serif",
        padding: "20px"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "950px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 24px rgba(0,0,0,0.1)"
      }}>
        {/* Left side - Form */}
        <div style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: "300px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <img
              src={flightImage}
              alt="logo"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                marginBottom: "16px"
              }}
            />
            <h3 style={{ color: accentColor, marginBottom: "8px" }}>Shuttle Booking System</h3>
            <p style={{ color: "#555" }}>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Phone number or email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: `1px solid ${accentColor}`,
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: `1px solid ${accentColor}`,
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: `1px solid ${accentColor}`,
                  fontSize: "1rem",
                  background: "#f1faee",
                  color: "#1d3557"
                }}
              >
                <option value="booker">Booker</option>
                <option value="organizer">Flight Organizer (Admin)</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: mainColor,
                color: "#fff",
                padding: "12px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginBottom: "12px",
                transition: "0.2s all"
              }}
            >
              Sign In
            </button>

            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <a
                href="#"
                style={{ color: accentColor, textDecoration: "underline" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (onForgotPasswordClick) onForgotPasswordClick();
                }}
              >
                Forgot password?
              </a>
            </div>

            <div style={{ textAlign: "center" }}>
              <span style={{ marginRight: "8px" }}>Don't have an account?</span>
              <button
                type="button"
                style={{
                  border: `1px solid #e63946`,
                  color: "#e63946",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  background: "#fff"
                }}
                onClick={onSignUpClick}
              >
                Create new
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Gradient + Background Image */}
        <div style={{
          flex: 1,
          position: "relative",
          minWidth: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "32px",
          textAlign: "center",
          background: `linear-gradient(135deg, rgba(29,78,216,0.8), rgba(69,123,157,0.8)), url(${flightImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div style={{
            backgroundColor: "rgba(0,0,0,0.35)", // optional overlay to make text readable
            padding: "16px",
            borderRadius: "12px"
          }}>
            <h3 style={{ marginBottom: "16px" }}>We are more than just a company</h3>
            <p>
              Plan and book your trips easily. Whether you are a passenger or organizer, our shuttle booking system ensures a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
