import React from 'react'
import './StudentCard.css';

function StudentCard({ st, id, isExpanded, handleClick }) {
  const calculateAvg = (arr) => {
    let nums = arr.map(str => parseFloat(str))
    let total = nums.reduce((val, acc) => Number(val) + acc);
    return total / arr.length;
  }

  return (
    <div className='StudentCard'>
      <div className='StudentCard-img'>
        <img src={st.pic} alt={`pic of ${st.firstName} ${st.lastName}`} />
      </div>
      <div className='StudentCard-info'>
        <h3>{`${st.firstName} ${st.lastName}`}</h3>
        <p>Email: {st.email}</p>
        <p>Company: {st.company}</p>
        <p>Skill: {st.skill}</p>
        <p>{`${calculateAvg(st.grades)}%`}</p>
        <div>
          {isExpanded.expanded && st.id === id
            ? <ul className='StudentCard-scores'>
                {st.grades.map((gr, i) => <li key={i}>{`Test ${i + 1}: ${gr}%`}</li>)}
              </ul>
            : null
          }
        </div>
      </div>
      <div onClick={handleClick}>
        <button id={st.id}>+</button>
      </div>
    </div>
  )
}

export default StudentCard;
