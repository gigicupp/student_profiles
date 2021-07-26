const calculateAvg = (arr) => {
  let nums = arr.map(str => parseFloat(str))
  let total = nums.reduce((val, acc) => Number(val) + acc);
  return total / arr.length;
}

const getUnique = (arr1, arr2) => {
  let combined = [...arr1, ...arr2];
  let newSet = combined.filter((st, i) => {
    return (combined.indexOf(st) === i)
  })
  return newSet;
}

const displayStudents = (arr1, arr2, str1, str2) => {
  if (!arr1.length && arr2.length) {
    return arr2;
  } else if (arr1.length && !arr2.length) {
    return arr1;
  } else {
    let combined = getUnique(arr1, arr2);
    let result = combined.filter(person =>
      `${person.firstName} ${person.lastName}`.toLowerCase().includes(str1.toLowerCase())
      && `${person.tags}`.toLowerCase().includes(str2.toLowerCase())
    )
    return result;
  }
}

export {calculateAvg, getUnique, displayStudents}