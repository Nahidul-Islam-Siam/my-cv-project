const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-6">Welcome to the dashboard!</p>
      <ul className="space-y-2">
        <li className="p-2 bg-white rounded shadow">Overview</li>
        <li className="p-2 bg-white rounded shadow">Reports</li>
        <li className="p-2 bg-white rounded shadow">Analytics</li>
        <li className="p-2 bg-white rounded shadow">Settings</li>
      </ul>
    </div>
  );
};

export default Dashboard;
