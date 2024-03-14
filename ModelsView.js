import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
  field: {
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    padding: '8px 16px',
    marginRight: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  updateLink: {
    textDecoration: 'none',
    color: '#fff',
  },
};

function ModelsView() {
  const { modelId } = useParams();
  const [model, setModel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/models/${modelId}`)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      })
      .catch((error) => console.log('Error:', error));
  }, [modelId]);

  const handleDelete = () => {
    if (!model || !model._id) {
      console.log('Model or ModelId is undefined');
      return;
    }

    fetch(`http://localhost:4000/models/${model._id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Model deleted successfully
          navigate('/models'); // Redirect to the models page or any other desired page
        } else {
          console.log('Error deleting model');
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{model.modelname}</h1>
      <div style={styles.field}>
        <span style={styles.label}>Model Number:</span> {model.modelno}
      </div>
      <div style={styles.field}>
        <span style={styles.label}>Model Cost:</span> {model.modelcost}
      </div>
      <div style={styles.field}>
        <span style={styles.label}>Model Description:</span> {model.modeldescription}
      </div>
      <div>
        <Link to={`/Updatemodels`} style={styles.updateLink}>
          <button style={styles.button}>
            Update
          </button>
        </Link>
        <button style={styles.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ModelsView;