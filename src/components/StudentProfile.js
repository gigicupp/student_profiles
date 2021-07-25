import React from 'react';
import './StudentProfile.css'

function StudentProfile({ students }) {
  const calculateAvg = (arr) => {
    let nums = arr.map(str => parseFloat(str))
    let total = nums.reduce((val, acc) => Number(val) + acc);
    return total / arr.length;
  }

  return (
    students.map((st, i)=> {
      return <div key={st.id} className='StudentProfile' >
        <div className='StudentProfile-img'>
          <img src={st.pic} alt={`pic of ${st.firstName} ${st.lastName}`} />
        </div>
        <div className='StudentProfile-info'>
          <h3>{`${st.firstName} ${st.lastName}`}</h3>
          <p>Email: {st.email}</p>
          <p>Company: {st.company}</p>
          <p>Skill: {st.skill}</p>
          <p>{`${calculateAvg(st.grades)}%`}</p>
        </div>
      </div>
    })
  )
}

export default StudentProfile;