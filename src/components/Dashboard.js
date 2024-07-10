import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting"
      })
    })
    .then(response => response.json())
    .then(data => {
      setMovies(data.result);
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
  }, []);

  const showCompanyInfo = () => {
    alert('Company: Geeksynergy Technologies Pvt Ltd\nAddress: Sanjayanagar, Bengaluru-56\nPhone: XXXXXXXXX09\nEmail: XXXXXX@gmail.com');
  };

  return (
    <div className="w-full bg-white p-8 shadow-md rounded mt-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-4">
        <button onClick={showCompanyInfo} className="bg-blue-500 text-white p-2 rounded">
          Company Info
        </button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Movies List</h3>
        <ul className="grid grid-cols-2 gap-4">
          {movies.map((movie, index) => (
            <li key={index} className="flex items-center mb-4">
              <img src={movie.poster} alt={`${movie.title} Poster`} className="w-16 h-24 object-cover rounded-md mr-4" />
              <div>
                <h4 className="text-lg font-bold">{movie.title}</h4>
                <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
                <p className="text-sm text-gray-600">Language: {movie.language}</p>
                <p className="text-sm text-gray-600">Director: {movie.director}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
