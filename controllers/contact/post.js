const fetch = require('node-fetch');
const validator = require('validator');

module.exports = (req, res) => {
  const ELASTIC_EMAIL_API_KEY = process.env.ELASTIC_EMAIL_API_KEY;
  const TARGET_EMAIL = process.env.TARGET_EMAIL;
  
  const data = req.body;

  if (!data || typeof data != 'object') {
    res.write(JSON.stringify({ success: false, error: 'bad_request' }));
    return res.end();
  }
  if (!data.sender || typeof data.sender != 'string' || !validator.isEmail(data.sender)) {
    res.write(JSON.stringify({ success: false, error: 'bad_request' }));
    return res.end();
  }
  if (!data.message || typeof data.message != 'string') {
    res.write(JSON.stringify({ success: false, error: 'bad_request' }));
    return res.end();
  }

  fetch(`https://api.elasticemail.com/v2/email/send?apiKey=${ELASTIC_EMAIL_API_KEY}&from=${data.sender.trim()}&bodyText=${data.message.trim()}&charset=utf-8&isTransactional=true&to=${TARGET_EMAIL}`, {
    method: 'POST'
  })
    .then(data => data.json())
    .then(data => {
      res.write(JSON.stringify({ success: data.success }));
      return res.end();
    })
    .catch(err => {
      console.log(err);
      res.write(JSON.stringify({ success: false, error: 'network_error' }));
      return res.end();
    });
};