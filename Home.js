import React, { useState, useEffect } from "react";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
  <img src="/img/1(1).jpeg"></img>
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.leftContent}>
          <h1 style={styles.heading}>Discover the Art of Clay Models</h1>
          <p style={styles.paragraph}>
            I am a clay artist, creating handcrafted clay flowers. I love to create customized products using clay and conduct online tutorials and workshops.
          </p>
          <p style={styles.paragraph}>
            Explore the beauty of handmade clay models crafted with passion and creativity.
          </p>
        </div>
        {/* <img src="/img/1(1).jpeg"></img> */}
        <div style={styles.rightContent}>
          <div style={styles.slideshow}>
            <img
              src={images[currentImageIndex]}
              alt={`Slideshow Image ${currentImageIndex + 1}`}
              style={styles.slideshowImage}
            />
          </div>
          <p style={styles.smallText}>Limited Edition Designs</p>
          <img
            src="https://example.com/inspiring-image-2.jpg"
            alt="Inspiring Image 2"
            style={styles.image}
          />
          <p style={styles.smallText}>Handcrafted Elegance</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    background: "#f2f2f2",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    textAlign: "left",
    flex: 1,
  },
  rightContent: {
    textAlign: "right",
    flex: 1,
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  image: {
    maxWidth: "100%",
    marginTop: "10px",
    borderRadius: "8px",
  },
  slideshow: {
    position: "relative",
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "8px",
  },
  slideshowImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease",
  },
  smallText: {
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default Home;