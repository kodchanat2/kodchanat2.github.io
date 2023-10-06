const level = {
  c: "9",
  l: "0",
  y: "5",
  e: "4",
  a: "3",
  i: "2",
  b: "1",
}

const skills = [
  {
    title: 'skill_lang',
    description: '',
    list: [
      {name: 'JavaScript', level: level.y},
      {name: 'TypeScript', level: level.i},
      {name: 'HTML / HTML5', level: level.y},
      {name: 'CSS / SCSS / SASS', level: level.e},
      {name: 'C / C++', level: level.e},
      {name: 'Python', level: level.b},
      {name: 'Java', level: level.b},
      {name: 'PHP', level: level.b},
    ]
  },
  {
    title: 'skill_stack',
    description: 'libraries and frameworks',
    list: [
      {name: 'AngularJS', level: level.l, date: '2017'},
      {name: 'React.js', level: level.l, date: '2020'},
      {name: 'Next.js', level: level.l, date: '2020'},
      {name: 'React-Native', level: level.b},
      {name: 'Vue.js', level: level.i},
      {name: 'Nuxt.js', level: level.c},
      {name: 'Express.js', level: level.i},
      {name: 'Node.js', level: level.i},
      {name: 'puppeteer', level: level.i},
      {name: 'Socket.io', level: level.i},
      {name: 'npm / yarn', level: level.a},
      {name: 'Git', level: level.a},
      {name: 'Restful API', level: level.c},
      {name: 'Bootstrap', level: level.l, date: '2017'},
      {name: 'Ant Design', level: level.l, date: '2020'},
      {name: 'Tailwind CSS', level: level.c},
      // {name: 'Font Awesome', level: ''},
      {name: 'LINE LIFF', level: level.l, date: '2019'},
      {name: 'LINE messaging API', level: level.l, date: '2019'},
    ]
  },
  {
    title: 'skill_tool',
    description: '',
    list: [
      {name: 'Figma', level: level.c},
      {name: 'Adobe Photoshop', level: level.i},
      {name: 'Postman', level: level.c},
      {name: 'Visual Studio Code', level: level.y},
      {name: 'Android Studio', level: level.l, date: '2016'},
      {name: 'Unity3D', level: level.l, date: '2019'},
    ]
  },
  {
    title: 'skill_soft',
    description: '',
    list: [
      {name: 'Web design', level: level.i},
      {name: 'Adapatibility'},
      {name: 'Creativity'},
      {name: 'Public speaking'},
      {name: 'Events management'},
    ]
  },
]

export default skills