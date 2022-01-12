const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));


class Exos5 {

}

new Exos5;