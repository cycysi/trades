const data = require('./dota.json')
const fs = require('fs')

const high = data.filter((d) => d.price > 100).sort((a, b) => b.price - a.price)
console.log(high)
fs.writeFileSync(__dirname + '/high-dota.json', JSON.stringify(high), {
  encoding: 'utf-8',
})
