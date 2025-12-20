import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [workstations, setWorkstations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your Node.js server (Port 5001)
    fetch('http://localhost:5001/api/workstations')
      .then((res) => res.json())
      .then((data) => {
        setWorkstations(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Hardware Inventory Dashboard</h1>
      <p>Managing 150+ workstations across multiple sites</p>

      {loading ? (
        <p>Loading asset data...</p>
      ) : (
        <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Health Status</th>
              <th>Warranty Expiration</th>
            </tr>
          </thead>
          <tbody>
            {workstations.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.name}</td>
                <td>{asset.status}</td>
                <td>{asset.warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App
