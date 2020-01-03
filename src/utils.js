export const limit = (func, timeout) => {
  let last = -Infinity
  return (...args) => {
    const current = Date.now()
    console.log(current, last, current - last)
    if (current - last >= timeout) {
      func(...args)
      last = current
    }
  }
}