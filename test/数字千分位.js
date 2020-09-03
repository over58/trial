
const fn = (num) => {
  let nums = (num + '').split('')
  const res = []
  while (nums.length > 3) {
    res.push(nums.slice(-3).join(''))
    nums = nums.slice(0, -3)
  }
  if (nums.length > 0) {
    res.push(nums.join(''))
  }
  res.reverse()
  return res.join(',')
}

console.log(
  fn(1231231)
)

console.log(
  fn(12)
)

console.log(
  fn(1)
)

console.log(
  fn(123456)
)
