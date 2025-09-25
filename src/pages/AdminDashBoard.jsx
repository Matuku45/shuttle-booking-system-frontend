import React, { useState } from 'react';

const accentColor = "#2563eb";
const mainColor = "#1e293b";
const highlightColor = "#38b000";

// Dummy shuttle and payment data
const initialShuttles = [
  {
    id: 1,
    route: "Johannesburg → Polokwane",
    date: "2025-09-25",
    time: "05:30",
    duration: "6.5 hrs",
    pickup: "10 min",
    seats: 10,
    price: 350,
  },
  {
    id: 2,
    route: "Pretoria → Durban",
    date: "2025-09-25",
    time: "08:00",
    duration: "3.2 hrs",
    pickup: "15 min",
    seats: 4,
    price: 400,
  }
];

const initialPayments = [
  { id: 1, passenger: "John Doe", shuttle: "Pretoria → Durban", amount: 800, status: "Paid" },
  { id: 2, passenger: "Jane Smith", shuttle: "Johannesburg → Polokwane", amount: 350, status: "Pending" }
];

const navLinks = [
  { label: "Dashboard", href: "#" },
  { label: "Manage Shuttles", href: "#" },
  { label: "Payments", href: "#" },
  { label: "Logout", href: "#" }
];

const AdminDashboard = () => {
  const [shuttles, setShuttles] = useState(initialShuttles);
  const [payments] = useState(initialPayments);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const [newShuttle, setNewShuttle] = useState({
    route: "",
    date: "",
    time: "",
    duration: "",
    pickup: "",
    seats: "",
    price: ""
  });

  // Add Shuttle
  const handleAddShuttle = (e) => {
    e.preventDefault();
    setShuttles([
      ...shuttles,
      {
        ...newShuttle,
        id: Date.now()
      }
    ]);
    setShowAdd(false);
    setNewShuttle({
      route: "",
      date: "",
      time: "",
      duration: "",
      pickup: "",
      seats: "",
      price: ""
    });
  };

  // Edit Shuttle
  const handleEditShuttle = (e) => {
    e.preventDefault();
    setShuttles(shuttles.map(s =>
      s.id === showEdit.id ? { ...showEdit } : s
    ));
    setShowEdit(null);
  };

  // Delete Shuttle
  const handleDeleteShuttle = (id) => {
    if (window.confirm("Delete this shuttle?")) {
      setShuttles(shuttles.filter(s => s.id !== id));
    }
  };

  return (
    <section style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "Segoe UI, Arial, sans-serif" }}>
      {/* Top Navigation Bar */}
      <nav style={{
        width: "100%",
        background: mainColor,
        color: "#fff",
        padding: "0 0 0 220px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(30,41,59,0.10)"
      }}>
        <span style={{ fontWeight: "bold", fontSize: "1.4rem", marginLeft: "16px", letterSpacing: "1px" }}>
          Admin Dashboard
        </span>
        <div style={{ marginLeft: "auto", marginRight: "32px", display: "flex", gap: "24px" }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1rem",
                padding: "8px 16px",
                borderRadius: "6px",
                transition: "background 0.2s",
                background: link.label === "Logout" ? "#e63946" : "transparent",
                border: link.label === "Dashboard" ? `2px solid ${accentColor}` : "none"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Side Navigation */}
      <aside style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200px",
        height: "100vh",
        background: accentColor,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        boxShadow: "2px 0 8px rgba(37,99,235,0.10)",
        zIndex: 99
      }}>
        <div style={{
          fontWeight: "bold",
          fontSize: "1.15rem",
          marginBottom: "28px",
          letterSpacing: "0.5px"
        }}>Welcome, Admin</div>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              padding: "12px 0",
              width: "100%",
              textAlign: "center",
              borderRadius: "6px",
              marginBottom: "10px",
              background: link.label === "Dashboard" ? "#1e293b" : "transparent",
              transition: "background 0.2s"
            }}
          >
            {link.label}
          </a>
        ))}
      </aside>

      {/* Main Content */}
      <div style={{
        marginLeft: "220px",
        paddingTop: "80px",
        paddingBottom: "32px"
      }}>
        <div style={{
          maxWidth: "950px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(37,99,235,0.10)",
          padding: "32px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px"
          }}>
            <h2 style={{
              color: accentColor,
              fontWeight: "bold",
              fontSize: "2.1rem",
              letterSpacing: "1px"
            }}>
              Shuttle Management
            </h2>
            <button
              style={{
                background: highlightColor,
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                padding: "12px 28px",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(56,176,0,0.10)",
                cursor: "pointer"
              }}
              onClick={() => setShowAdd(true)}
            >
              + Add Shuttle
            </button>
          </div>

          {/* Shuttle List */}
          <div>
            {shuttles.map(shuttle => (
              <div key={shuttle.id} style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 2px 8px rgba(56,176,0,0.08)",
                padding: "18px 24px",
                marginBottom: "22px",
                display: "flex",
                alignItems: "center",
                border: "1.5px solid #e5e7eb"
              }}>
                <div style={{ flex: "1 1 0", minWidth: "220px" }}>
                  <div style={{ color: "#64748b", fontWeight: "500", fontSize: "0.98rem" }}>
                    {shuttle.date} &nbsp; &bull; &nbsp; {shuttle.time} &nbsp; &bull; &nbsp; {shuttle.duration}
                  </div>
                  <div style={{ fontWeight: "bold", color: accentColor, fontSize: "1.15rem", margin: "6px 0" }}>
                    {shuttle.route}
                  </div>
                  <div style={{ color: "#22223b", fontSize: "0.98rem" }}>
                    Pickup window: {shuttle.pickup}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.98rem" }}>
                    Seats left: <span style={{ fontWeight: "bold", color: accentColor }}>{shuttle.seats}</span>
                  </div>
                </div>
                <div style={{
                  flex: "0 0 180px",
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end"
                }}>
                  <div style={{
                    color: highlightColor,
                    fontWeight: "bold",
                    fontSize: "1.15rem",
                    marginBottom: "6px"
                  }}>
                    ZAR {shuttle.price}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.95rem" }}>per seat</div>
                  <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                    <button
                      style={{
                        background: accentColor,
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "0.95rem"
                      }}
                      onClick={() => setShowEdit({ ...shuttle })}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        background: "#e63946",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "0.95rem"
                      }}
                      onClick={() => handleDeleteShuttle(shuttle.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Shuttle Modal */}
          {showAdd && (
            <div style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 24px rgba(37,99,235,0.10)",
                padding: "32px",
                maxWidth: "420px",
                width: "95%",
                position: "relative"
              }}>
                <button
                  onClick={() => setShowAdd(false)}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 18,
                    background: accentColor,
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    zIndex: 2
                  }}
                  aria-label="Close"
                >×</button>
                <h3 style={{ color: accentColor, marginBottom: "18px", textAlign: "center" }}>
                  Add Shuttle
                </h3>
                <form onSubmit={handleAddShuttle}>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Route</label>
                    <input
                      type="text"
                      required
                      value={newShuttle.route}
                      onChange={e => setNewShuttle({ ...newShuttle, route: e.target.value })}
                      placeholder="e.g. Pretoria → Durban"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Date</label>
                    <input
                      type="date"
                      required
                      value={newShuttle.date}
                      onChange={e => setNewShuttle({ ...newShuttle, date: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Time</label>
                    <input
                      type="time"
                      required
                      value={newShuttle.time}
                      onChange={e => setNewShuttle({ ...newShuttle, time: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Duration</label>
                    <input
                      type="text"
                      required
                      value={newShuttle.duration}
                      onChange={e => setNewShuttle({ ...newShuttle, duration: e.target.value })}
                      placeholder="e.g. 3.2 hrs"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Pickup Window</label>
                    <input
                      type="text"
                      required
                      value={newShuttle.pickup}
                      onChange={e => setNewShuttle({ ...newShuttle, pickup: e.target.value })}
                      placeholder="e.g. 15 min"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Seats</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={newShuttle.seats}
                      onChange={e => setNewShuttle({ ...newShuttle, seats: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Price (ZAR)</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={newShuttle.price}
                      onChange={e => setNewShuttle({ ...newShuttle, price: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: highlightColor,
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 24px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      width: "100%",
                      fontSize: "1rem"
                    }}
                  >
                    Add Shuttle
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Edit Shuttle Modal */}
          {showEdit && (
            <div style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 24px rgba(37,99,235,0.10)",
                padding: "32px",
                maxWidth: "420px",
                width: "95%",
                position: "relative"
              }}>
                <button
                  onClick={() => setShowEdit(null)}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 18,
                    background: accentColor,
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    zIndex: 2
                  }}
                  aria-label="Close"
                >×</button>
                <h3 style={{ color: accentColor, marginBottom: "18px", textAlign: "center" }}>
                  Edit Shuttle
                </h3>
                <form onSubmit={handleEditShuttle}>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Route</label>
                    <input
                      type="text"
                      required
                      value={showEdit.route}
                      onChange={e => setShowEdit({ ...showEdit, route: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Date</label>
                    <input
                      type="date"
                      required
                      value={showEdit.date}
                      onChange={e => setShowEdit({ ...showEdit, date: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Time</label>
                    <input
                      type="time"
                      required
                      value={showEdit.time}
                      onChange={e => setShowEdit({ ...showEdit, time: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Duration</label>
                    <input
                      type="text"
                      required
                      value={showEdit.duration}
                      onChange={e => setShowEdit({ ...showEdit, duration: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Pickup Window</label>
                    <input
                      type="text"
                      required
                      value={showEdit.pickup}
                      onChange={e => setShowEdit({ ...showEdit, pickup: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Seats</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={showEdit.seats}
                      onChange={e => setShowEdit({ ...showEdit, seats: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontWeight: "500", color: accentColor }}>Price (ZAR)</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={showEdit.price}
                      onChange={e => setShowEdit({ ...showEdit, price: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #b3b3b3",
                        marginTop: "6px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: highlightColor,
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 24px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      width: "100%",
                      fontSize: "1rem"
                    }}
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Payments Tracker */}
          <div style={{ marginTop: "48px" }}>
            <h2 style={{
              color: accentColor,
              fontWeight: "bold",
              fontSize: "1.5rem",
              letterSpacing: "1px",
              marginBottom: "18px"
            }}>
              Payments Tracker
            </h2>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#f8fafc",
              borderRadius: "12px",
              overflow: "hidden"
            }}>
              <thead>
                <tr style={{ background: accentColor, color: "#fff" }}>
                  <th style={{ padding: "12px" }}>Passenger</th>
                  <th style={{ padding: "12px" }}>Shuttle</th>
                  <th style={{ padding: "12px" }}>Amount</th>
                  <th style={{ padding: "12px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(pay => (
                  <tr key={pay.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "12px" }}>{pay.passenger}</td>
                    <td style={{ padding: "12px" }}>{pay.shuttle}</td>
                    <td style={{ padding: "12px" }}>ZAR {pay.amount}</td>
                    <td style={{
                      padding: "12px",
                      color: pay.status === "Paid" ? highlightColor : "#e63946",
                      fontWeight: "bold"
                    }}>{pay.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;