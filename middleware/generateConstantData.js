const ALLOWED_LANGUAGE_VALUES = [
  'en',
  'tr'
];

const DEFAULT_LANGUAGE = 'en';

const MEMBERS = {
  aleyna: {
    id: 1,
    name: 'Aleyna Özyurt',
    title: 'Designer',
    image: 'aleyna.webp',
  },
  necip: {
    id: 2,
    name: 'Necip Sağıroğlu',
    title: 'Developer',
    image: 'necip.webp',
  },
  akin: {
    id: 3,
    name: 'Akın Semih Pur',
    title: 'Co-Founder & Research',
    image: 'akin.webp',
  },
  mutlu: {
    id: 4,
    name: 'Mutlu Mutludağ',
    title: 'Writer',
    image: 'mutlu.webp',
  },
  yakup: {
    id: 5,
    name: 'Yakup Altay',
    title: 'Social Media',
    image: 'yakup.webp',
  },
  mete: {
    id: 6,
    name: 'Mete Koray Gergin',
    title: 'Co-Founder & Product',
    image: 'mete.webp',
  },
  aytunc: {
    id: 7,
    name: 'Aytunç Sancar',
    title: 'Developer',
    image: 'aytunc.webp',
  },
  yunus: {
    id: 8,
    name: 'Yunus Gürlek',
    title: 'Co-Founder & CEO',
    image: 'yunus.webp',
  },
  damir: {
    id: 9,
    name: 'Damir Shamanev',
    title: 'Advisor',
    image: 'damir.webp',
  },
  erol: {
    id: 10,
    name: 'Erol Durummond',
    title: 'Advisor',
    image: 'erol.webp',
  },
  mustafa: {
    id: 11,
    name: 'Mustafa Aksöz',
    title: 'Co-Founder & Events',
    image: 'mustafa.webp',
  },
  anthony: {
    id: 12,
    name: 'Anthony DiPrinzio',
    title: 'Advisor',
    image: 'anthony.webp',
  }
};

module.exports = (req, res, next) => {
  const query_language = req.query.lang && ALLOWED_LANGUAGE_VALUES.includes(req.query.lang) ? req.query.lang : null;
  let language = req.query.lang ? req.query.lang : (req.headers['accept-language'] ? req.headers['accept-language'].split('-')[0] : DEFAULT_LANGUAGE);

  if (!language || !ALLOWED_LANGUAGE_VALUES.includes(language))
    language = DEFAULT_LANGUAGE;

  const NODE101_SOCIAL_MEDIA_ACCOUNTS = {
    twitter: language == 'tr' ? 'https://twitter.com/node101_TR' : 'https://twitter.com/node_101',
    github: 'https://github.com/node101-io',
    telegram: language == 'tr' ? 'https://t.me/node101_tr' : 'https://t.me/node101',
    instagram: 'https://www.instagram.com/node_101/',
    youtube: language == 'tr' ? 'https://www.youtube.com/@node101turkiye' : 'https://www.youtube.com/@node101',
    spotify: language == 'tr' ? 'https://open.spotify.com/show/0ocAj5RGbBVXcABbGV2ZC9' : 'https://open.spotify.com/show/5qQyR3JUUOYYfSJsulb9A7',
  };

  const NODE101_WEBSITES = {
    web: 'https://node101.io',
    library: 'https://library.node101.io',
    stake: 'https://stake.node101.io',
    klein: 'https://klein.run'
  };

  const MEMBER_COLUMNS = [
    [
      MEMBERS.aleyna,
      MEMBERS.necip,
    ],
    [
      MEMBERS.akin,
      MEMBERS.mutlu,
      MEMBERS.yakup,
    ],
    [
      MEMBERS.mete,
      MEMBERS.aytunc,
    ],
    [
      MEMBERS.yunus,
      MEMBERS.damir,
      MEMBERS.erol,
    ],
    [
      MEMBERS.mustafa,
      MEMBERS.anthony,
    ],
  ];

  const MEMBER_SECONDARY_COLUMNS = [
    [
      MEMBERS.mustafa,
      MEMBERS.aleyna,
      MEMBERS.necip,
    ],
    [
      MEMBERS.akin,
      MEMBERS.mutlu,
      MEMBERS.yakup,
    ],
    [
      MEMBERS.mete,
      MEMBERS.aytunc,
      MEMBERS.anthony,
    ],
    [
      MEMBERS.yunus,
      MEMBERS.damir,
      MEMBERS.erol,
    ],
  ];

  const MEMBER_TERTIARY_COLUMNS = [
    [
      MEMBERS.mustafa,
      MEMBERS.yunus,
      MEMBERS.aleyna,
      MEMBERS.necip,
    ],
    [
      MEMBERS.akin,
      MEMBERS.damir,
      MEMBERS.mutlu,
      MEMBERS.yakup,
    ],
    [
      MEMBERS.mete,
      MEMBERS.erol,
      MEMBERS.aytunc,
      MEMBERS.anthony,
    ],
  ];

  const MEMBER_QUATERNARY_COLUMNS = [
    [
      MEMBERS.mustafa,
      MEMBERS.akin,
      MEMBERS.aleyna,
      MEMBERS.necip,
      MEMBERS.yakup,
      MEMBERS.mutlu,
    ],
    [
      MEMBERS.mete,
      MEMBERS.yunus,
      MEMBERS.damir,
      MEMBERS.erol,
      MEMBERS.aytunc,
      MEMBERS.anthony,
    ],
  ];

  res.locals.query_lang = query_language;
  res.locals.lang = language;
  res.locals.NODE101_SOCIAL_MEDIA_ACCOUNTS = NODE101_SOCIAL_MEDIA_ACCOUNTS;
  res.locals.NODE101_WEBSITES = NODE101_WEBSITES;
  res.locals.member_columns = MEMBER_COLUMNS;
  res.locals.member_secondary_columns = MEMBER_SECONDARY_COLUMNS;
  res.locals.member_tertiary_columns = MEMBER_TERTIARY_COLUMNS;
  res.locals.member_quaternary_columns = MEMBER_QUATERNARY_COLUMNS;

  return next();
}