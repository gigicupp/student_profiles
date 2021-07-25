import React from 'react';
import './StudentCard.css';
import useInputHooks from '../hooks/useInputHooks';
import { v4 as uuidv4 } from 'uuid';

function StudentCard({ st, handleClick, addTags }) {
  const calculateAvg = (arr) => {
    let nums = arr.map(str => parseFloat(str))
    let total = nums.reduce((val, acc) => Number(val) + acc);
    return total / arr.length;
  }
  //add a tag
  const [tag, setTag, reset] = useInputHooks('');

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
              {st.grades.map((gr, i) => <li key={uuidv4()}>{`Test ${i + 1}: ${gr}%`}</li>)}
            </ul>
          }
        </div>
        <div className='StudentCard-tags'>
          {st.tags.length
            ? st.tags.map((tag) => <button key={uuidv4()}>{tag}</button>)
            : null
          }
        </div>
        <form className='StudentCard-add-tags'
          onSubmit={(e) => {
            e.preventDefault();
            addTags(tag, st.id);
            reset();
          }}
        >
          <input type='text' placeholder='Add a tag' onChange={setTag} value={tag}/>
        </form>
      </div>
      <div className='StudentCard-expand' onClick={handleClick}>
        <button id={st.id}>{st.expanded ? '-' : '+'}</button>
      </div>
    </div>
  )
}

export default StudentCard;
