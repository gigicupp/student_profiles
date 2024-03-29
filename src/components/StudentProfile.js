import React from 'react';
import StudentCard from './StudentCard'
import './StudentProfile.css';

function StudentProfile({ students, handleClick, addTags }) {
  return (
    students.map((st) => {
      return <div key={st.id} id={st.id} className='StudentProfile'>
        <StudentCard 
          st={st}
          handleClick={handleClick} 
          addTags={addTags}
        />
      </div>
    })
  )
}

export default StudentProfile;