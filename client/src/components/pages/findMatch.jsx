import React, { useEffect, useState } from "react";
import arvi from "../image/arvi.png";

const Match = () => {
  const [users, setUsers] = useState([]);
  const [searchLanguage, setSearchLanguage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [searchLanguage]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=language:${searchLanguage}`);
      const data = await response.json();
      setUsers(data.items.slice(0, 10)); // Fetching only the first 10 items
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <div className="flex sm:flex-wrap container bg-gradient-to-l from-bgarvin-400 mr-0 w-full h-full min-h-screen">
        <div className="text-arvin-600 pl-20 pt-40 gap-3 flex flex-col justify-center w-1/2">
          <div className="mb-4">
            <label htmlFor="language" className="font-bold">Search Language:</label>
            <input
              id="language"
              type="text"
              value={searchLanguage}
              onChange={(e) => setSearchLanguage(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 mt-1"
            />
          </div>
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 mb-4 rounded shadow">
              <div className="flex items-center mb-2">
                <img className="h-12 w-12 rounded-full mr-3" src={user.avatar_url} alt={user.login} />
                <h2 className="text-lg font-bold">{user.login}</h2>
              </div>
              <p className="mb-2">GitHub: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
              <button onClick={() => window.location.href = user.html_url} className="bg-blue-500 text-white py-2 px-4 rounded">View Profile</button>
            </div>
          ))}
        </div>
        <div className="fixed top-1/2 right-4 mr-4 transform -translate-y-1/2 flex flex-col items-center">
          <img className="h-auto w-64 mb-4" src={arvi} alt="Arvi" />
          <div className="text-center text-arvin-700">
            <h2 className="text-xl font-bold">Name: Arvi</h2>
            <p>Gender: Male</p>
            <p>Language: Rust</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
