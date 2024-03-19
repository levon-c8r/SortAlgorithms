export function mergeSort(arr) {
  let sortedArr = [...arr]

  const recursion = (arr) => {
    if(arr.length > 1) {
      const mid = Math.floor(arr.length/2)
      const L = arr.slice(0,mid)
      const R = arr.slice(mid)

      recursion(L)
      recursion(R)

      let i = 0, j = 0, k = 0

      while(i < L.length && j < R.length) {
        if(L[i] < R[j]) {
          arr[k] = L[i]
          i++
        } else {
          arr[k] = R[j]
          j++
        }
        k++
      }

      while(i < L.length) {
        arr[k] = L[i]
        i++
        k++
      }

      while(j < R.length) {
        arr[k] = R[j]
        j++
        k++
      }

    }
  }

  recursion(sortedArr)

  return sortedArr
}