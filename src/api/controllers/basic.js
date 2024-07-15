const { getSubscribers } = require('../repositories/transaction');

const getUser = (req, res) => {
  const data = getSubscribers(req, res);

  res.status(200).json(data);
};

module.exports = {
  getUser
};
