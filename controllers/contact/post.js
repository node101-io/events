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
  if (!data.name || typeof data.name != 'string') {
    res.write(JSON.stringify({ success: false, error: 'bad_request' }));
    return res.end();
  }
  if (!data.message || typeof data.message != 'string') {
    res.write(JSON.stringify({ success: false, error: 'bad_request' }));
    return res.end();
  }

  fetch(`https://api.elasticemail.com/v2/email/send?apiKey=${ELASTIC_EMAIL_API_KEY}&bodyText=${data.message}&charset=utf-8&isTransactional=true&to=${TARGET_EMAIL}&from=${TARGET_EMAIL}&fromName=Contact%20From%20${data.name}&subject=Contact%20From%20${data.sender.trim()}`, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(response => {
      if (response.success) {       
        fetch(`https://api.elasticemail.com/v2/email/send?apiKey=${ELASTIC_EMAIL_API_KEY}&isTransactional=true&charset=utf-8&to=${data.sender.trim()}&template=contact&merge_name${data.name}&merge_message=${data.message}&subject=Thanks%20for%20Reaching%20Out%20to%20Us!`, {
          method: 'POST'
        })
          .then(response_2 => response_2.json())
          .then(response_2 => {
            if (response_2.success)
              res.write(JSON.stringify({ success: true }));

            res.write(JSON.stringify({ success: false, error: response_2 }));
          })
          .catch(err => {
            res.write(JSON.stringify({ success: false, error: err }));
          });
        
        res.end();
        return;
      }
      res.write(JSON.stringify({ success: false, error: response }));
      return res.end();
    })
    .catch(err => {
      res.write(JSON.stringify({ success: false, error: err }));
      return res.end();
    });
};