import React, { useState, useEffect } from 'react'
import axios from 'axios';
import StudentProfile from './StudentProfile';
import StudentSearch from './StudentSearch';
import './StudentList.css';
import useInputHooks from '../hooks/useInputHooks';

function StudentList() {
  //grab students from the API
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.hatchways.io/assessment/students`)
      let updatedResult = result.data.students.map(student => {
        return {...student, expanded: false, tags: []}
      })
      setStudents(updatedResult);
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

  //expand the score
  const handleClick = (e) => {
    e.preventDefault();
    let clickedId = e.target.id;
    let updatedStudents = students.map(student => {
      if(student.id === clickedId) {
        return {...student, expanded: !student.expanded}
      } else {
        return student
      }
    })
    setStudents(updatedStudents)
  }

  //add a tag
  const addTags = (tag, id) => {
    let updatedStudents = students.map(student => {
      if(student.id === id) {
        return {...student, tags:[...student.tags, tag]}
      } else {
        return student;
      }
    })
    setStudents(updatedStudents)
  }
  

  return (
    <div className='StudentList'>
      <StudentSearch 
        setSearchTerm={setSearchTerm} 
        searchTerm={searchTerm}
      />
      <StudentProfile 
        students={!result.length ? students : result} 
        handleClick={handleClick}
        addTags={addTags}
      />
    </div>
  )
}

export default StudentList;