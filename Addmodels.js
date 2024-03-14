import React, { useState } from "react";

function Addmodels() {
  const [model, setModel] = useState({
    modelno: "",
    modelname: "",
    modelcost: "",
    modeldescription: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the backend API to save the model data
    fetch("http://localhost:4000/addclaymodels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or display a success message
        setConfirmationMessage("Model details have been successfully saved");
      })
      .catch((error) => {
        console.log("Error:", error);
        setConfirmationMessage("Error saving model details. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">Add Model</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="modelno" className="form-label">
                    Model Number:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="modelno"
                    name="modelno"
                    value={model.modelno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modelname" className="form-label">
                    Model Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelname"
                    name="modelname"
                    value={model.modelname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modelcost" className="form-label">
                    Model Cost:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="modelcost"
                    name="modelcost"
                    value={model.modelcost}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modeldescription" className="form-label">
                    Model Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="modeldescription"
                    name="modeldescription"
                    value={model.modeldescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Model
                </button>
                {confirmationMessage && (
                  <div className="mt-3 text-success">{confirmationMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addmodels;
