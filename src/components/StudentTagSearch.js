import React from 'react'
import './StudentSearch.css'

export default function StudentTagSearch({ searchTag, setSearchTag }) {
  return (
    <form className='StudentSearch'
      onSubmit={(e) => e.preventDefault()}
    >
      <input 
        type='text'
        placeholder='Search by tag'
        value={searchTag}
        onChange={setSearchTag}
      />
    </form>
  )
}
