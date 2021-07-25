import React from 'react';
import { useState } from 'react';
import StudentCard from './StudentCard'
import './StudentProfile.css';

function StudentProfile({ students }) {
  //expand student detail
  const [isExpanded, setIsExpanded] = useState({id: 0, expanded: false})
  const [id, setId] = useState(null)

  const handleClick = (e) => {
    e.preventDefault();
    setIsExpanded({id: e.target.id, expanded: !isExpanded.expanded});
    setId(e.target.id)
  }

  return (
    students.map((st) => {
      return <div key={st.id} id={st.id} className='StudentProfile'>
        <StudentCard 
          st={st} 
          handleClick={handleClick} 
          isExpanded={isExpanded}
          id={id}
        />
      </div>
    })
  )
}

export default StudentProfile;