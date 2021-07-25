import React from 'react'
import './StudentCard.css';

function StudentCard({ st, handleClick }) {
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
          {st.expanded &&
            <ul className='StudentCard-scores'>
              {st.grades.map((gr, i) => <li key={i}>{`Test ${i + 1}: ${gr}%`}</li>)}
            </ul>
          }
        </div>
        <div className='StudentCard-tags'>
          {st.tags.length
            ? st.tags.map((tag, i) => <button key={i}>{tag}</button>)
            : null
          }
        </div>
        <div className='StudentCard-add-tags'>
          <input type='text' placeholder='Add a tag' />
        </div>
      </div>
      <div className='StudentCard-expand' onClick={handleClick}>
        <button id={st.id}>{st.expanded ? '-' : '+'}</button>
      </div>
    </div>
  )
}

export default StudentCard;
