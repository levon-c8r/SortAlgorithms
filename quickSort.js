export function quickSort(arr) {
  let sortedArr = [...arr]

  const recursion = (arr, low, high) => {
    if(low < high) {
      let i = low - 1
      const pivot = arr[high]

      for(let j = low; j <= high; j++){
        if(arr[j] < pivot) {
          i = i + 1
          let copy = arr[i]
          arr[i] = arr[j]
          arr[j] = copy
        }
      }

      let copy = arr[i+1]
      arr[i+1] = arr[high]
      arr[high] = copy

      recursion(sortedArr, low, i-1)
      recursion(sortedArr, i+2, high)
    }
  }

  recursion(sortedArr, 0, sortedArr.length-1)

  return sortedArr
}
