import React, { useState } from "react"

const SearchMissingPersons = () => {
  const [name, setName] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const handleSearch = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
      if (!response.ok) throw new Error("Person not found")

      const data = await response.json()
      setResult(data.person)
      setError("")
    } catch (error) {
      setError(error.message)
      setResult(null)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Search Missing Persons</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name (Kartik, Shivansh, Akshat, Devashish)"
        className="border rounded p-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded p-2 ml-2"
      >
        Search
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Result:</h3>
          <p>Name: {result.name}</p>
          <img
            src={result.image}
            alt={result.name}
            className="mt-2 border rounded"
            style={{ width: "200px" }}
          />
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default SearchMissingPersons
