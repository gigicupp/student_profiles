import React from 'react'
import './StudentSearch.css'

export default function StudentSearch({searchTerm, setSearchTerm }) {

  return (
    <form className='StudentSearch'>
      <h4>{searchTerm}</h4>
      <input 
        type='text'
        placeholder='Search by name'
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </form>
  )
}
