export function selectionSort(arr) {
  let sortedArr = [...arr]

  for(let i = 0; i < sortedArr.length; i++ ){
    let minIndex = i

    for(let j = i + 1; j < sortedArr.length; j++  ) {
      if (sortedArr[minIndex] > sortedArr[j]) {
        minIndex = j;
      }
    }

    let copy = sortedArr[i]
    sortedArr[i] = sortedArr[minIndex]
    sortedArr[minIndex] = copy
  }

  return sortedArr
}