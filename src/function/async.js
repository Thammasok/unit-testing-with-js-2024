/* eslint-disable prefer-promise-reject-errors */
function fetchData(isSuccess) {
  return new Promise((resolve, reject) => {
    if (!isSuccess) {
      reject('error messages');
    }

    resolve('peanut butter');
  });
}

function fetchDataWithCallback(cb) {
  cb(null, 'peanut butter');
}

module.exports = {
  fetchData,
  fetchDataWithCallback,
};
