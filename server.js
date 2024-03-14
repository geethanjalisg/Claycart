const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;
//
mongoose
  .connect('mongodb+srv://geethanjalisg755:pandugokul755@claycart01.wvgchjl.mongodb.net/?retryWrites=true&w=majority&appName=Claycart01', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

const claycartSchema = new mongoose.Schema({
  modelno: { type: Number, required: true },
  modelname: { type: String, required: true },
  modelcost: { type: Number, required: true },
  modeldescription: { type: String, required: true },
});

const ClayCart = mongoose.model('ClayCart', claycartSchema, 'clay');

app.post('/addclaymodels', (req, res) => {
  const { modelno, modelname, modelcost, modeldescription } = req.body;
  const newClay = new ClayCart({
    modelno,
    modelname,
    modelcost,
    modeldescription,
  });
  newClay
    .save()
    .then((clay) => {
      res.status(201).json(clay);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/getallmodels', (req, res) => {
  ClayCart.find({})
    .then((models) => {
      res.json(models);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.get('/models/:modelno', (req, res) => {
  const modelno = req.params.modelno;
  ClayCart.findOne(modelno)
    .then((model) => {
      if (model) {
        res.json(model);
      } else {
        res.status(404).json({ message: 'Model not found' });
      }
    })
    .catch((error) => {
      console.log('Error getting model:', error);
      res.status(500).json({ error: 'An error occurred while getting the model' });
    });
});
app.delete('/models/:modelId', (req, res) => {
  const modelId = req.params.modelId;
  ClayCart.findByIdAndDelete(modelId)
    .then((deletedModel) => {
      if (!deletedModel) {
        return res.status(404).json({ error: 'Model not found' });
      }
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.put('/models/:modelId', (req, res) => {
  const modelId = req.params.modelId;
  const updatedModel = req.body;
  ClayCart.findByIdAndUpdate(modelId, updatedModel, { new: true })
    .then((updatedModel) => {
      if (!updatedModel) {
        return res.status(404).json({ error: 'Model not found' });
      }
      res.json(updatedModel);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
