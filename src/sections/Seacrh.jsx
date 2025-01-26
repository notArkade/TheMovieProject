import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="./search.png" alt="" />
        <input type="text" placeholder='Search through the catalog' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  )
}

export default Search