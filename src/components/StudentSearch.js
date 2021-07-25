import React from 'react'
import './StudentSearch.css'

export default function StudentSearch({searchTerm, setSearchTerm }) {

  return (
    <form className='StudentSearch'>
      <input 
        type='text'
        placeholder='Search by name'
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </form>
  )
}
