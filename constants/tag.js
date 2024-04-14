const tags = {
  'award_coding': { abbr: 'ac', group: 'award'},
  'award_other': { abbr: 'ao', group: 'award'},
  'project_publish': { abbr: 'pp', group: 'project'},
  'project_experimental': { abbr: 'pe', group: 'project'},
  'project_competition': { abbr: 'pc', group: 'project'},
}
const groups = [
  { 
    key: 'award',
    value: ['award_coding','award_other']
  },{ 
    key: 'project',
    value: ['project_publish','project_experimental','project_competition']
  },
]

export default {tags, groups}