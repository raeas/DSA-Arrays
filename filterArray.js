function arrayFilter(arr, value) {
  let filteredArr = []
  arr.forEach(item => {
      if (item < value) {
          filteredArr.push(item)
      }
  })
  console.log(filteredArr)
  return filteredArr
}

arrayFilter([1, 2, 4, 5, 6, 7, 10], 5)