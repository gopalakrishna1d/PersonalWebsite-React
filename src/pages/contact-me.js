import { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
  const [submitted, setSubmitted] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbypEfaGZ_Foro0Uy3ZYpRKMz6j4SHUq7pmqQ7pc0_v8qL_vgJ91hUE7m4zzzoQJup8tgg/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Message", formData.Message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Thank you! Your message has been recorded.");
        setFormData({ Name: "", Email: "", Message: "" });
        setSubmitted(true);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "600px",
      margin: "2rem auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Name:</label>
          <input
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Email:</label>
          <input
            name="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Message:</label>
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
