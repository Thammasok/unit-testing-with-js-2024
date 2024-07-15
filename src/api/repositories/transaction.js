const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'prd',
});

const getSubscribers = () => {
  connection.query(
    'SELECT * FROM subscribed_youtube_channels',
    (err, results) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        return null;
      }
      return results;
    }
  );
};

module.exports = {
  getSubscribers
};
