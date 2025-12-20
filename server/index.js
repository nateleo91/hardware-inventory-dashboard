const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors()); // Allows your React app to talk to this server

const workstations = [
  { id: 1, name: "WKST-001", status: "Healthy", warranty: "2026-05-12" },
  { id: 2, name: "WKST-002", status: "Warning", warranty: "2024-01-15" },
];

app.get('/api/workstations', (req, res) => {
  res.json(workstations);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
