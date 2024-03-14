// Onlinetutorials.js
import React from "react";

function Onlinetutorials() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Tutorials</h1>
      <p style={styles.paragraph}>
        Welcome to our Online Tutorials page! Dive into the world of clay modeling from the comfort of your home with our engaging online classes. Unleash your creativity and learn the art of crafting beautiful clay models through expert-led tutorials.
      </p>
      <p style={styles.paragraph}>
        <strong>Key Features:</strong>
      </p>
      <ul style={styles.list}>
        <li>Live interactive sessions with experienced instructors.</li>
        <li>Step-by-step guidance for both beginners and experienced artists.</li>
        <li>Access to a supportive online community of art enthusiasts.</li>
        <li>Learn at your own pace with on-demand video lessons.</li>
      </ul>
      <p style={styles.paragraph}>
        Elevate your clay modeling skills with our diverse range of online tutorials. Join our community and embark on a creative journey like never before!
      </p>
      <p style={styles.instagram}>
        Follow us on <a href="https://www.instagram.com/claycartwithanjali?igsh=MWdiZ3htYXJrd2d1ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a> for more inspiration!
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif", // Choose a stylish sans-serif font
    backgroundColor: "#f8d7da", // Light pink background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#721c24", // Dark red color
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#555",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    marginBottom: "15px",
  },
  instagram: {
    fontSize: "16px",
    marginTop: "20px",
    color: "#007bff", // Blue color
  },
};

export default Onlinetutorials;
