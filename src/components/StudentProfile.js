import React from 'react';
import useToggleHooks from '../hooks/useToggleHooks';
import StudentCard from './StudentCard'
import './StudentProfile.css';

function StudentProfile({ students }) {
  const calculateAvg = (arr) => {
    let nums = arr.map(str => parseFloat(str))
    let total = nums.reduce((val, acc) => Number(val) + acc);
    return total / arr.length;
  }

   //expand student detail
   const [isExpanded, setIsExpanded] = useToggleHooks(false)

  return (
    students.map((st)=> {
      return <div key={st.id} id={st.id} className='StudentProfile'>
        <div className='StudentProfile-img'>
          <img src={st.pic} alt={`pic of ${st.firstName} ${st.lastName}`} />
        </div>
        <div className='StudentProfile-info'>
          <h3>{`${st.firstName} ${st.lastName}`}</h3>
          <p>Email: {st.email}</p>
          <p>Company: {st.company}</p>
          <p>Skill: {st.skill}</p>
          <p>{`${calculateAvg(st.grades)}%`}</p>
          {isExpanded 
            ? <ul className='StudentProfile-scores'>
                {st.grades.map((gr,i) => <li>{`Test ${i + 1}: ${gr}%`}</li>)}
              </ul>
            : null
          }
        </div>
        <button onClick={setIsExpanded}>+</button>
      </div>
    })
  )
}

export default StudentProfile;