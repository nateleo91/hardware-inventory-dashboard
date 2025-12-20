import { useEffect, useState } from 'react'

function App() {
  const [workstations, setWorkstations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/workstations')
      .then((res) => res.json())
      .then((data) => setWorkstations(data));
  }, []);

  // Calculation Logic for the "Standout Metric"
  const totalCount = workstations.length;
  const criticalCount = workstations.filter(w => w.status === "Critical").length;
  const healthyCount = workstations.filter(w => w.status === "Healthy").length;

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hardware Inventory Dashboard</h1>
        <p className="text-gray-600">Enterprise Asset Monitoring</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Total Workstations</p>
          <p className="text-2xl font-mono">{totalCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Critical Issues</p>
          <p className="text-2xl font-mono text-red-600">{criticalCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <p className="text-sm text-gray-500 uppercase font-bold">Healthy Systems</p>
          <p className="text-2xl font-mono text-green-600">{healthyCount}</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Warranty Exp.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {workstations.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{asset.name}</td>
                <td className="px-6 py-4">
                  {/* Conditional Color-Coding */}
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    asset.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                    asset.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{asset.warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
