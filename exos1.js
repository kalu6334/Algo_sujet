const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

const k = 17;

class Exo1 {
    constructor(list, k) {
        this.k = k;
        this.list = list
        this.sort();
    }
    sort() {
        for (let i = 0; i < this.list.length - 1; i++) {
            for (let j = 0; j < this.list.length; j++) {
                if (this.list[j] + this.list[i] === this.k) {
                    return console.log('true :' + list)
                }

            }
            return console.log('false :' + list);
        }
    }
}
new Exo1(list, k);