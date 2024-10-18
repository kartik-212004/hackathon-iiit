import  { useState } from 'react';

const SearchMissingPersons = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for: ", searchTerm);
    // Implement the search functionality here.
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Search Missing Persons</h3>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-lg"
          placeholder="Enter name or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Search</button>
      </form>
    </div>
  );
};

export default SearchMissingPersons;
