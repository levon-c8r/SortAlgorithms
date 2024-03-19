export function bubbleSort(arr) {
  let sortedArr = [...arr]

  for(let  i = 0; i < sortedArr.length; i++) {
    for(let  j = 0 ; j < sortedArr.length-i ; j++) {
      if(sortedArr[j] > sortedArr[j+1]) {
        let copy = sortedArr[j]
        sortedArr[j] = sortedArr[j+1]
        sortedArr[j+1] = copy
      }
    }
  }

  return sortedArr
}
