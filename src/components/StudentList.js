import React, { useState, useEffect } from 'react'
import axios from 'axios';
import StudentProfile from './StudentProfile';
import StudentSearch from './StudentSearch';
import './StudentList.css'
import useInputHooks from '../hooks.js/useInputHooks'

function StudentList() {
  //grab students from the API
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.hatchways.io/assessment/students`)
      setStudents(result.data.students);
    };
    fetchData();
  }, [])

  //search for students
  const [searchTerm, setSearchTerm] = useInputHooks('');
  const [result, setResults] = useState([]);
  useEffect(() => {
    const results = students.filter(person => 
      `${person.firstName} ${person.lastName}`.toLowerCase().includes(`${searchTerm}`.toLowerCase())
    )
    setResults(results)
  }, [searchTerm])

  return (
    <div className='StudentList'>
      <StudentSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <StudentProfile students={!result.length ? students : result} />
    </div>
  )
}

export default StudentList;