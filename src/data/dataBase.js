let fs = require('fs')

module.exports = {
    getPlatos: JSON.parse(fs.readFileSync('./src/data/platos.json', 'utf-8'))
}