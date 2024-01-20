import express from 'express';
import projectData from './api/projectData.json'assert { type: 'json' };
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("express server started"); 
});

app.get('/projectData', (req, res) => {
  res.send(projectData); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
