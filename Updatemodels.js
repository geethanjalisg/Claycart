import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
  },
  button: {
    padding: '8px 16px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function UpdateModels() {
  const { modelId } = useParams();
  const [model, setModel] = useState(null);
  const [updatedModel, setUpdatedModel] = useState({
    modelno: '',
    modelname: '',
    modelcost: '',
    modeldescription: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/models/${modelId}`)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
        setUpdatedModel(data);
      })
      .catch((error) => console.log('Error:', error));
  }, [modelId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!model || !model._id) {
      console.log('Model or ModelId is undefined');
      return;
    }

    fetch(`http://localhost:4000/models/${model._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedModel),
    })
      .then((response) => {
        if (response.ok) {
          // Model updated successfully
          setUpdateSuccess(true);
        } else {
          console.log('Error updating model');
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Update Model</h1>
      {updateSuccess && <div>Model updated successfully!</div>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Model Number:
          <input
            style={styles.input}
            type="text"
            name="modelno"
            value={updatedModel.modelno}
            onChange={handleInputChange}
          />
        </label>
        <label style={styles.label}>
          Model Name:
          <input
            style={styles.input}
            type="text"
            name="modelname"
            value={updatedModel.modelname}
            onChange={handleInputChange}
          />
        </label>
        <label style={styles.label}>
          Model Cost:
          <input
            style={styles.input}
            type="text"
            name="modelcost"
            value={updatedModel.modelcost}
            onChange={handleInputChange}
          />
        </label>
        <label style={styles.label}>
          Model Description:
          <textarea
            style={styles.textarea}
            name="modeldescription"
            value={updatedModel.modeldescription}
            onChange={handleInputChange}
          />
        </label>
        <button style={styles.button} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
export default UpdateModels;