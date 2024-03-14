// Buymodels.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Buymodels() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getallmodels")
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  const cardStyle = {
    textDecoration: "none",
    color: "inherit",
    backgroundColor: "#f7f7f7",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flex: "0 1 calc(33.33% - 20px)",
    transition: "transform 0.2s ease-in-out",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
  };

  const handleMouseEnter = (modelId) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model._id === modelId ? { ...model, hovered: true } : model
      )
    );
  };

  const handleMouseLeave = (modelId) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model._id === modelId ? { ...model, hovered: false } : model
      )
    );
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Buy Models</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {models.map((model) => (
          <Link
            to={`/models/${model._id}`} // Update the path to include the model ID
            key={model._id}
            style={{ ...cardStyle, ...(model.hovered && hoverStyle) }}
            onMouseEnter={() => handleMouseEnter(model._id)}
            onMouseLeave={() => handleMouseLeave(model._id)}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{model.modelname}</h3>
            <p style={{ marginBottom: "5px" }}>Model Number: {model.modelno}</p>
            <p style={{ marginBottom: "5px" }}>Model Cost: {model.modelcost}</p>
            <p style={{ marginBottom: "5px" }}>Model Description: {model.modeldescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Buymodels;