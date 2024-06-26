import React from 'react'
import Top from './Top'
import Latest from './Latest'

function Home({movies}) {
  return (
    <>
      <div className="">
        <Top movies={movies}/>
        <Latest movies={movies} />
      </div>
    </>
  )
}

export default Home
