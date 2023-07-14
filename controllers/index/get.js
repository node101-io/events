module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Blockchain Event Organizer Based in Turkey'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'increaseNumbers']
      },
      meta: {
        title: res.__('Blockchain Event Organizer Based in Turkey'),
        description: res.__('An event organizer based in Turkey that focuses on blockchain technology and cryptocurrencies.'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    url: '',
    active_page: '',
    member_columns: [
      [
        { id: 1, name: 'Aleyna Özyurt', title: 'Co-Founder', image: 'aleyna.webp' },
        { id: 2, name: 'Necip Sağıroğlu', title: 'Co-Founder', image: 'necip.webp' }
      ],
      [
        { id: 3, name: 'Akın Semih Pur', title: 'Co-Founder', image: 'akin.webp' },
        { id: 4, name: 'Mutlu Mutludağ', title: 'Co-Founder', image: 'mutlu.webp' },
        { id: 5, name: 'Yakup Altay', title: 'Co-Founder', image: 'yakup.webp' }
      ],
      [
        { id: 6, name: 'Mete Koray Gergin', title: 'Co-Founder', image: 'mete.webp' },
        { id: 7, name: 'Aytunç Sancar', title: 'Co-Founder', image: 'aytunc.webp' },
      ],
      [
        { id: 8, name: 'Yunus Gürlek', title: 'Co-Founder', image: 'yunus.webp' },
        { id: 9, name: 'Damir Shamanev', title: 'Co-Founder', image: 'damir.webp' },
        { id: 10, name: 'Erol Durummond', title: 'Co-Founder', image: 'erol.webp' }
      ],
      [
        { id: 11, name: 'Mustafa Aksöz', title: 'Co-Founder', image: 'mustafa.webp' },
        { id: 12, name: 'Member 1', title: 'Co-Founder', image: 'member1.webp' }
      ],
    ],
    member_secondary_columns: [
      [
        { id: 1, name: 'Aleyna Özyurt', title: 'Co-Founder', image: 'aleyna.webp' },
        { id: 2, name: 'Necip Sağıroğlu', title: 'Co-Founder', image: 'necip.webp' },
        { id: 11, name: 'Mustafa Aksöz', title: 'Co-Founder', image: 'mustafa.webp' }
      ],
      [
        { id: 3, name: 'Akın Semih Pur', title: 'Co-Founder', image: 'akin.webp' },
        { id: 4, name: 'Mutlu Mutludağ', title: 'Co-Founder', image: 'mutlu.webp' },
        { id: 5, name: 'Yakup Altay', title: 'Co-Founder', image: 'yakup.webp' }
      ],
      [
        { id: 6, name: 'Mete Koray Gergin', title: 'Co-Founder', image: 'mete.webp' },
        { id: 7, name: 'Aytunç Sancar', title: 'Co-Founder', image: 'aytunc.webp' },
        { id: 12, name: 'Member 1', title: 'Co-Founder', image: 'member1.webp' }
      ],
      [
        { id: 8, name: 'Yunus Gürlek', title: 'Co-Founder', image: 'yunus.webp' },
        { id: 9, name: 'Damir Shamanev', title: 'Co-Founder', image: 'damir.webp' },
        { id: 10, name: 'Erol Durummond', title: 'Co-Founder', image: 'erol.webp' }
      ],
    ],
    member_tertiary_columns: [
      [
        { id: 1, name: 'Aleyna Özyurt', title: 'Co-Founder', image: 'aleyna.webp' },
        { id: 2, name: 'Necip Sağıroğlu', title: 'Co-Founder', image: 'necip.webp' },
        { id: 11, name: 'Mustafa Aksöz', title: 'Co-Founder', image: 'mustafa.webp' },
        { id: 8, name: 'Yunus Gürlek', title: 'Co-Founder', image: 'yunus.webp' },
      ],
      [
        { id: 3, name: 'Akın Semih Pur', title: 'Co-Founder', image: 'akin.webp' },
        { id: 4, name: 'Mutlu Mutludağ', title: 'Co-Founder', image: 'mutlu.webp' },
        { id: 5, name: 'Yakup Altay', title: 'Co-Founder', image: 'yakup.webp' },
        { id: 9, name: 'Damir Shamanev', title: 'Co-Founder', image: 'damir.webp' },
      ],
      [
        { id: 6, name: 'Mete Koray Gergin', title: 'Co-Founder', image: 'mete.webp' },
        { id: 7, name: 'Aytunç Sancar', title: 'Co-Founder', image: 'aytunc.webp' },
        { id: 12, name: 'Member 1', title: 'Co-Founder', image: 'member1.webp' },
        { id: 10, name: 'Erol Durummond', title: 'Co-Founder', image: 'erol.webp' },
      ],
    ],
    member_quaternary_columns: [
      [
        { id: 1, name: 'Aleyna Özyurt', title: 'Co-Founder', image: 'aleyna.webp' },
        { id: 2, name: 'Necip Sağıroğlu', title: 'Co-Founder', image: 'necip.webp' },
        { id: 11, name: 'Mustafa Aksöz', title: 'Co-Founder', image: 'mustafa.webp' },
        { id: 3, name: 'Akın Semih Pur', title: 'Co-Founder', image: 'akin.webp' },
        { id: 4, name: 'Mutlu Mutludağ', title: 'Co-Founder', image: 'mutlu.webp' },
        { id: 5, name: 'Yakup Altay', title: 'Co-Founder', image: 'yakup.webp' }
      ],
      [
        { id: 6, name: 'Mete Koray Gergin', title: 'Co-Founder', image: 'mete.webp' },
        { id: 7, name: 'Aytunç Sancar', title: 'Co-Founder', image: 'aytunc.webp' },
        { id: 12, name: 'Member 1', title: 'Co-Founder', image: 'member1.webp' },
        { id: 8, name: 'Yunus Gürlek', title: 'Co-Founder', image: 'yunus.webp' },
        { id: 9, name: 'Damir Shamanev', title: 'Co-Founder', image: 'damir.webp' },
        { id: 10, name: 'Erol Durummond', title: 'Co-Founder', image: 'erol.webp' }
      ],
    ],
  });
}