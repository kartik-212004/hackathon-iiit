const SurveillanceFeed = () => {
  const cameras = [
    { id: 1, location: "Gate 1", status: "Active", lastUpdated: "2 mins ago" },
    { id: 2, location: "Temple Square", status: "Active", lastUpdated: "5 mins ago" },
    { id: 3, location: "Food Court", status: "Inactive", lastUpdated: "10 mins ago" },
    { id: 4, location: "Parking Lot", status: "Active", lastUpdated: "1 min ago" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Surveillance Cameras</h3>
      <div className="grid grid-cols-1 gap-6">
        {cameras.map(camera => (
          <div key={camera.id} className="border rounded-lg p-4 flex justify-between">
            <div>
              <h4 className="text-lg font-bold">{camera.location}</h4>
              <p>Status: <span className={camera.status === "Active" ? "text-green-500" : "text-red-500"}>{camera.status}</span></p>
              <p>Last updated: {camera.lastUpdated}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Feed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveillanceFeed;
