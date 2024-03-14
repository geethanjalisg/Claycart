// AboutUs.js
import React from "react";

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to ClayCart, where art meets craftsmanship. I am a passionate clay artist creating handcrafted clay flowers and custom products. I love sharing my skills through online tutorials and small workshops. ClayCart is not just a store; it's a journey of creativity and expression.
      </p>
      <p style={styles.paragraph}>
        From limited edition designs to custom-made masterpieces, we celebrate the beauty of handmade artistry, infusing each creation with a unique story.
      </p>
      <p style={styles.paragraph}>
        ClayCart stands out for its commitment to quality, authenticity, and customer satisfaction. Every model is meticulously crafted, surpassing your expectations and leaving a lasting impression.
      </p>
      <p style={styles.paragraph}>
        Explore our collection and embark on a journey of discovery. Whether you're a collector, art enthusiast, or seeking a unique gift, ClayCart welcomes you to experience the magic of clay models like never before.
        For more assistance, Contact GEETHANJALI at 8904024964.
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
    fontFamily: "'Dancing Script', cursive", // Change the font family to a more stylish cursive font
    backgroundColor: "#f0e6f6", // Light purple background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#6a0572", // Dark purple color
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#333",
  },
};

export default AboutUs;
