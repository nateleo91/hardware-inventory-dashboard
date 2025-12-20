import { useEffect, useState, useMemo } from 'react'

function App() {
  // --- 1. STATE & DATA ---
  const [workstations, setWorkstations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from your Node server on port 5001
    fetch('http://localhost:5001/api/workstations')
      .then((res) => res.json())
      .then((data) => {
        setWorkstations(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // --- 2. LOGIC (Calculations) ---
  // Count totals for the stats cards
  const totalCount = workstations.length;
  const criticalCount = workstations.filter(w => w.status === "Critical").length;
  const healthyCount = workstations.filter(w => w.status === "Healthy").length;

  // Professional Search Filtering (Optimized with useMemo)
  const filteredWorkstations = useMemo(() => {
    return workstations.filter(asset => 
      asset.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [workstations, searchTerm]);

  // --- 3. THE UI (HTML/Tailwind) ---
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Hardware Inventory Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Managing 150+ multi-site workstations
        </p>
      </header>

      {/* Search Bar - Global Filter */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by asset name (e.g. WKST-105)..."
          className="w-full p-4 rounded-xl border-none shadow-md focus:ring-4 focus:ring-blue-200 outline-none transition-all text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-blue-500">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total Fleet</p>
          <p className="text-3xl font-mono font-bold text-gray-800">{totalCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-red-500">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Critical Health</p>
          <p className="text-3xl font-mono font-bold text-red-600">{criticalCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-green-500">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Healthy Systems</p>
          <p className="text-3xl font-mono font-bold text-green-600">{healthyCount}</p>
        </div>
      </div>

      {/* Dynamic Alert Banner - Only shows if Critical items exist */}
      {criticalCount > 0 && (
        <div className="bg-red-600 text-white p-5 rounded-xl mb-8 shadow-xl flex items-center animate-pulse">
          <span className="text-2xl mr-4">⚠️</span>
          <div>
            <p className="font-bold">URGENT ACTION REQUIRED</p>
            <p className="text-sm opacity-90">{criticalCount} systems are reporting critical hardware failure.</p>
          </div>
        </div>
      )}

      {/* Inventory Table Container */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-20 text-center text-gray-400">Loading asset data from server...</div>
        ) : (
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Asset Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Warranty Exp.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredWorkstations.map((asset) => (
                <tr key={asset.id} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-gray-700 group-hover:text-blue-600">
                    {asset.name}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      asset.status === 'Healthy' ? 'bg-green-100 text-green-700' :
                      asset.status === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                    {asset.warranty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Empty State for Search */}
        {!loading && filteredWorkstations.length === 0 && (
          <div className="p-20 text-center text-gray-400">
            No workstations found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}

export default App
