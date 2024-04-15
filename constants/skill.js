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
      { name: 'JavaScript', alt: 'javascript', mono: true, level: level.y },
      { name: 'TypeScript', alt: 'typescript', mono: true, level: level.i },
      { name: 'HTML / HTML5', alt: 'html', mono:true, level: level.y },
      { name: 'CSS / SCSS / SASS', alt: 'css',mono:true, level: level.y },
      { name: 'C / C++', alt: 'cpp',mono:true, level: level.e },
      { name: 'Python', alt: 'python', level: level.b },
      { name: 'Java', alt: 'java', level: level.b },
      { name: 'PHP', alt: 'php', level: level.b },
      { name: 'Regex', alt: 'regex', level: level.e}

    ]
  },
  {
    title: 'skill_stack',
    description: 'libraries and frameworks',
    list: [
      { name: 'AngularJS', alt: 'angular', level: level.l, date: '2017' },
      { name: 'React.js', alt: 'react', level: level.i },
      { name: 'Next.js', alt: 'nextjs', level: level.i },
      // { name: 'React-Native', alt: 'skill-alts:react-dark', level: level.b },
      { name: 'Vue.js', alt: 'vuejs', level: level.c },
      { name: 'Nuxt.js', alt: 'nuxtjs', level: level.c },
      { name: 'Express.js', alt: 'expressjs', level: level.i },
      { name: 'puppeteer', icon: 'devicon:puppeteer', level: level.i },
      { name: 'Socket.io', icon: 'logos:socket-io', level: level.i },
      { name: 'Restful API', icon: 'dashicons:rest-api', level: level.c },
      { name: 'Firebase', icon: 'logos:firebase', mono: true, level: level.l, date: '2020' },
      { name: 'Bootstrap', alt: 'bootstrap',mono:true, level: level.l, date: '2017' },
      { name: 'Material-UI', alt: 'materialui', level: level.l, date: '2019'},
      { name: 'Ant Design', icon: 'devicon:antdesign', level: level.l, date: '2020' },
      { name: 'Tailwind CSS', alt: 'tailwindcss', level: level.c },
      // {name: 'Font Awesome', icon: '', level: ''},
      // { name: 'LINE LIFF & messaging ', icon: '', level: level.l, date: '2019' },
      { name: 'GSAP', alt: 'htmx', level: level.c },
      { name: 'Google Analytics', icon: 'logos:google-analytics', level: level.i },
    ]
  },
  {
    title: 'skill_tool',
    description: '',
    list: [
      { name: 'Figma', alt: 'figma', level: level.c },
      { name: 'Postman', alt: 'postman', mono:true, level: level.c },
      { name: 'VS Code', alt: 'vscode', level: level.y },
      { name: 'npm', alt: 'npm', level: level.a },
      { name: 'yarn', icon: 'devicon:yarn', level: level.a },
      { name: 'Git', alt: 'git', mono:true, level: level.a },
      { name: 'Node.js', alt: 'nodejs', level: level.i },
      { name: 'Adobe Photoshop', alt: 'photoshop', mono:true, level: level.i },
      { name: 'Android Studio', alt: 'androidstudio', level: level.l, date: '2016' },
      { name: 'Unity3D', alt: 'unity', level: level.l, date: '2019' },
      { name: 'LINE API', icon: 'mingcute:line-app-fill', fill: '#57BE60', level: level.l, date: '2019' },
      { name: 'Cloudfare', alt: 'cloudflare', level: level.b },
      { name: 'Notion API', icon: 'logos:notion-icon', level: level.b },
      { name: 'Telegram APIs', icon: 'logos:telegram', level: level.b },
      { name: 'Godot', alt: 'godot', level: level.l, date: '2023' },
    ]
  },
  {
    title: 'skill_soft',
    description: '',
    list: [
      { name: 'Web design', icon: 'iconoir:design-nib', },
      { name: 'Adaptability', icon: 'iconoir:people-tag', },
      { name: 'Creativity', icon: 'iconoir:light-bulb-on' },
      { name: 'Public speaking', icon:'iconoir:emoji-talking-happy'},
      // { name: 'Events management' },
    ]
  },
]

export default skills