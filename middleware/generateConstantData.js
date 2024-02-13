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
    name_color: 'rgba(218, 255, 158, 1)',
    background_color: 'rgba(215, 227, 178, 1)',
  },
  necip: {
    id: 2,
    name: 'Necip Sağıroğlu',
    title: 'Developer',
    image: 'necip.webp',
    name_color: 'rgba(107, 214, 207, 1)',
    background_color: 'rgba(107, 214, 207, 1)',
  },
  akin: {
    id: 3,
    name: 'Akın Semih Pur',
    title: 'Co-Founder & Research',
    image: 'akin.webp',
    name_color: 'rgba(153, 203, 255, 1)',
    background_color: 'rgba(97, 174, 255, 1)',
  },
  // mutlu: {
  //   id: 4,
  //   name: 'Mutlu Mutludağ',
  //   title: 'Writer',
  //   image: 'mutlu.webp',
  //   name_color: 'rgba(241, 203, 255, 1)',
  //   background_color: 'rgba(241, 203, 255, 1)',
  // },
  yakup: {
    id: 5,
    name: 'Yakup Altay',
    title: 'Developer',
    image: 'yakup.webp',
    name_color: 'rgba(137, 234, 255, 1)',
    background_color: 'rgba(137, 234, 255, 1)',
  },
  mete: {
    id: 6,
    name: 'Mete Koray Gergin',
    title: 'Co-Founder & Product',
    image: 'mete.webp',
    name_color: 'rgba(244, 113, 28, 1)',
    background_color: 'rgba(253, 145, 75, 1)',
  },
  // aytunc: {
  //   id: 7,
  //   name: 'Aytunç Sancar',
  //   title: 'Developer',
  //   image: 'aytunc.webp',
  //   name_color: 'rgba(138, 195, 255, 1)',
  //   background_color: 'rgba(155, 155, 255, 1)',
  // },
  yunus: {
    id: 8,
    name: 'Yunus Gürlek',
    title: 'Co-Founder & CEO',
    image: 'yunus.webp',
    name_color: 'rgba(158, 240, 181, 1)',
    background_color: 'rgba(158, 240, 181, 1)',
  },
  damir: {
    id: 9,
    name: 'Damir Shamanev',
    title: 'Advisor',
    image: 'damir.webp',
    name_color: 'rgba(215, 80, 80, 1)',
    background_color: 'rgba(215, 80, 80, 1)',
  },
  erol: {
    id: 10,
    name: 'Erol Durummond',
    title: 'Advisor',
    image: 'erol.webp',
    name_color: 'rgba(219, 240, 158, 1)',
    background_color: 'rgba(219, 240, 158, 1)',
  },
  mustafa: {
    id: 11,
    name: 'Mustafa Aksöz',
    title: 'Co-Founder & Events',
    image: 'mustafa.webp',
    name_color: 'rgba(183, 183, 255, 1)',
    background_color: 'rgba(183, 183, 255, 1)',
  },
  anthony: {
    id: 12,
    name: 'Anthony DiPrinzio',
    title: 'Advisor',
    image: 'anthony.webp',
    name_color: 'rgba(103, 255, 182, 1)',
    background_color: 'rgba(103, 255, 182, 1)',
    note: 'You\'ll always be remembered.'
  }
};
// const MEMBER_COLUMNS_IN_FIVE = [
//   [
//     MEMBERS.aleyna,
//     MEMBERS.necip,
//   ],
//   [
//     MEMBERS.akin,
//     // MEMBERS.mutlu,
//     MEMBERS.yakup,
//   ],
//   [
//     MEMBERS.mete,
//     // MEMBERS.aytunc,
//   ],
//   [
//     MEMBERS.yunus,
//     MEMBERS.damir,
//     MEMBERS.erol,
//   ],
//   [
//     MEMBERS.mustafa,
//     MEMBERS.anthony,
//   ],
// ];
const MEMBER_COLUMNS_IN_FOUR = [
  [
    MEMBERS.mustafa,
    MEMBERS.aleyna,
    MEMBERS.necip,
  ],
  [
    MEMBERS.akin,
    // MEMBERS.mutlu,
    MEMBERS.yakup,
  ],
  [
    MEMBERS.yunus,
    MEMBERS.mete,
    // MEMBERS.aytunc,
    MEMBERS.erol,
  ],
  [
    MEMBERS.damir,
    MEMBERS.anthony,
  ],
];
const MEMBER_COLUMNS_IN_THREE = [
  [
    MEMBERS.mustafa,
    MEMBERS.aleyna,
    MEMBERS.necip,
  ],
  [
    MEMBERS.yunus,
    MEMBERS.akin,
    MEMBERS.damir,
    // MEMBERS.mutlu,
    MEMBERS.yakup,
  ],
  [
    MEMBERS.mete,
    MEMBERS.erol,
    // MEMBERS.aytunc,
    MEMBERS.anthony,
  ],
];
const MEMBER_COLUMNS_IN_TWO = [
  [
    MEMBERS.mustafa,
    MEMBERS.akin,
    MEMBERS.aleyna,
    MEMBERS.necip,
    MEMBERS.yakup,
    // MEMBERS.mutlu,
  ],
  [
    MEMBERS.mete,
    MEMBERS.yunus,
    MEMBERS.damir,
    MEMBERS.erol,
    // MEMBERS.aytunc,
    MEMBERS.anthony,
  ],
];

const NODE101_WEBSITES = {
  web: 'https://node101.io',
  library: 'https://library.node101.io',
  stake: 'https://stake.node101.io',
  klein: 'https://klein.run'
};

const ROUTES = [
  'cryptist',
  'sui-move-workshop',
  'aleo-tour-of-turkiye',
  'nym-community-gathering',
  'moda-palas'
];

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

  res.locals.query_lang = query_language;
  res.locals.lang = language;

  // res.locals.MEMBER_COLUMNS_IN_FIVE = MEMBER_COLUMNS_IN_FIVE;
  res.locals.MEMBER_COLUMNS_IN_FOUR = MEMBER_COLUMNS_IN_FOUR;
  res.locals.MEMBER_COLUMNS_IN_THREE = MEMBER_COLUMNS_IN_THREE;
  res.locals.MEMBER_COLUMNS_IN_TWO = MEMBER_COLUMNS_IN_TWO;

  res.locals.NODE101_SOCIAL_MEDIA_ACCOUNTS = NODE101_SOCIAL_MEDIA_ACCOUNTS;
  res.locals.NODE101_WEBSITES = NODE101_WEBSITES;

  res.locals.ROUTES = ROUTES;

  return next();
}