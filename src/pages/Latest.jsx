import React from "react";
import { FaCentercode } from "react-icons/fa";

function Latest({ movies }) {
  let date = movies.release_date;
  const getReleaseYear = (date) => {
    return new Date(date).getFullYear();
  };

   


  return (
    <>
      <h1 className="text-[3rem] md:text-[5rem] md:ml-[4rem] text-slate-200 font-bold  ml-[2rem] mb-[3rem]">Latest Movies</h1>
      <div className=" md:flex md:flex-wrap md:p-3  w-[100vw]">
        {
          //if release year ===2024
          movies
            .filter((movie,i) => movie && getReleaseYear(movie.release_date) === 2024)
            .map((movie) => {
              return (
                <div
                  key={Math.random()}
                  className="w-[350px] md:w-[300px]  object-h-[600px] border-2 border-gray-300 rounded-lg shadow-2xl m-2 mb-[100px] ml-[2.2rem] flex items-center flex-col  bg-purple-500"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt={movie.title}
                    className="w-full h-[350px] content-center rounded-sm "
                  />
                  <div className="m-3 max-w-[380px]">
                    <h3 className="text-md text-white mt-2">
                      {" "}
                      <span className="text-[20px] ml-2">{`⭐️ ${movie.vote_average} `}</span>
                      <span className="text-[20px] ml-2">
                        ({getReleaseYear(movie.release_date)})
                      </span>
                    </h3>
                    <h1 className="text-2xl  font-bold mt-2 ml-2 text-white">
                      {movie.title}
                    </h1>

                    <p className="text-white text-[14px] mt-2 ml-2 overflow-hidden h-16">
                      {movie.overview}
                    </p>
                  </div>
                  <button  className="hover:text-black font-bold  flex justify-center items-center gap-2 bg-purple-400 rounded-md px-6 py-2   relative text-white">
                    Visit
                    <span>
                      <FaCentercode />
                    </span>
                  </button>
                </div>
              );
            })
        }
      </div>
    </>
  );
}

export default Latest;


const visitPage =()=>{

}