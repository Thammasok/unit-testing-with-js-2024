function fetchData(isSuccess) {
  return new Promise((resolve, rejects) => {
    if (isSuccess) {
      return resolve('peanut butter')
    }

    return rejects('error messages')
  })
}

function fetchDataWithCallback(cb) {
  cb(null, 'peanut butter')
}

module.exports = {
  fetchData,
  fetchDataWithCallback
}
