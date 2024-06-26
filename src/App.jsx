import React from "react";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Latest from "./pages/Latest";
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
async function getMovies(pageNo = 1) {
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc&api_key=7f1ac3ee12aa80693e1df75e72fb4a77`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let allMovies = [];
      for (let i = 1; i <= 50; i++) {
        const moviesFromPage = await getMovies(i);
        allMovies = [...allMovies, ...moviesFromPage];
      }
      setMovies(allMovies);
      console.log(movies);
     
    };

    fetchMovies();
  }, []);

  return (
    <>
     <Router>
       <div className="min-h-screen bg-purple-400">
      <Header />
     
      <main className="p-4">
        <Routes>
          <Route exact path="/" element={<Home  movies={movies}/>} />
          <Route path="/top" element={<Top movies={movies}/>} />
          <Route path="/latest" element={<Latest movies={movies}/>} />
      
        </Routes>
      </main>
      <Bottom />
      <Footer />
    </div>
  </Router>
    </>
  );
}

export default App;
