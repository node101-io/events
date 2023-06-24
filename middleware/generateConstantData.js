const ALLOWED_LANGUAGE_VALUES = [
  'en',
  'tr'
];
const DEFAULT_LANGUAGE = 'en';

module.exports = (req, res, next) => {
  const query_language = req.query.lang && ALLOWED_LANGUAGE_VALUES.includes(req.query.lang) ? req.query.lang : null;
  let language = req.query.lang ? req.query.lang : (req.headers['accept-language'] ? req.headers['accept-language'].split('-')[0] : DEFAULT_LANGUAGE);
  
  if (!language || !ALLOWED_LANGUAGE_VALUES.includes(language))
    language = DEFAULT_LANGUAGE;

  res.locals.query_lang = query_language;
  res.locals.lang = language;

  return next();
}