const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

function sortByOrder(values) {
  let vals = [...values];     // this *seems* to prevent collection mutation...
  return vals.sort((a, b) => Math.sign(b.data.order - a.data.order));
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function formatDate(date) {
  let d;
  if (typeof date === 'number') {
    d = new Date(date * 1000);
  } else {
    d = new Date(date);
  }
  return `${monthNames[d.getMonth()]} ${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}, ${d.getFullYear()}`; 
}

function head(array, n) {
  if(!Array.isArray(array) || array.length === 0) {
    return [];
  }
  if( n < 0 ) {
    return array.slice(n);
  }

  return array.slice(0, n);
}

function filterTagList(tags) {
  return (tags || []).filter(tag => ["all", "blog", "projects"].indexOf(tag) === -1);
}

module.exports = function(config) {
  const markdownLib = markdownIt({ html: true })
  .use(markdownItAnchor, {
    level: 2,
    permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true }),
  });
  config.setLibrary('md', markdownLib);

  config.addPassthroughCopy({'./src/static/': '.'});
  config.addWatchTarget('./src/static');

  config.addFilter("sortByOrder", sortByOrder);
  config.addFilter("formatDate", formatDate);
  config.addFilter("head", head);
  config.addFilter("filterTagList", filterTagList)

  config.addFilter('objToArray', function(obj) {
    return obj ? Object.values(obj) : []
  });
  
  config.addFilter('parent', function(array, id) {
    return array.filter(item => item['parent'] == id);
  });
  
  return {
    dir: {
      input: './src',
      output: './build',
    }
  }
}