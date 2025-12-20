const express = require('express');
const cors = require('cors');

const app = express(); // <--- THIS LINE IS MISSING OR IN THE WRONG PLACE
const PORT = 5001;

app.use(cors());
app.use(express.json());

// --- MOCK DATA GENERATOR ---
const generateWorkstations = () => {
  const assets = [];
  const statuses = ["Healthy", "Warning", "Critical"];
  
  for (let i = 1; i <= 155; i++) {
    assets.push({
      id: i,
      name: `WKST-${String(i).padStart(3, '0')}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      warranty: `202${Math.floor(Math.random() * 4) + 5}-01-01`,
    });
  }
  return assets;
};

const workstations = generateWorkstations();

// --- ROUTES ---
app.get('/api/workstations', (req, res) => {
  res.json(workstations);
});

// Search Route (New for the filtering feature)
app.get('/api/workstations/search', (req, res) => {
  const { name } = req.query;
  if (!name) return res.json(workstations);
  const filtered = workstations.filter(w => 
    w.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(filtered);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
