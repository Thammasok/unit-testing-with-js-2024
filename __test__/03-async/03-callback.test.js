const { fetchDataWithCallback } = require("../../src/function/async")

// 3. Callback
test('the data is peanut butter', (done) => {
  // 1. Arrange
  function callback(error, data) {
    if (error) {
      done(error)
      return
    }
    try {
      // 3. Assertion
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
    }
  }

  // 2. Action
  fetchDataWithCallback(callback)
})
