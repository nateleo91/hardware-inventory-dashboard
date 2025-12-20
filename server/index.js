// Replace your old 'workstations' array with this:
const generateWorkstations = () => {
    const assets = [];
    const statuses = ["Healthy", "Warning", "Critical"];
    
    for (let i = 1; i <= 155; i++) {
      assets.push({
        id: i,
        name: `WKST-${String(i).padStart(3, '0')}`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        warranty: `202${Math.floor(Math.random() * 4) + 5}-01-01`, // Random date between 2025-2028
        healthScore: Math.floor(Math.random() * 100)
      });
    }
    return assets;
  };
  
  const workstations = generateWorkstations();
  
  // Existing route
  app.get('/api/workstations', (req, res) => {
    res.json(workstations);
  });
  
  // NEW Route for filtering (for a future "Critical Only" view)
  app.get('/api/workstations/critical', (req, res) => {
    const critical = workstations.filter(w => w.status === "Critical" || w.status === "Warning");
    res.json(critical);
  });
  