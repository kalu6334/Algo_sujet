const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

class Exercice4 {
    constructor(list) {
        this.list = list;
        this.sort(this.list);
    }

    sort(list) {
        let building = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1] || i === list.length - 1) {
                building++;
            }
        }
        console.log(`${building} immeubles voient le coucher du soleil`);
    }
}
new Exercice4(list);