const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

class Exo2 {
    constructor(list) {
        this.list = list;
        this.buildcount = 0;
        this.sort(this.list);
    }

    sort(list) {
        for (let i = 0; i < list.length; i++) {
            let res = true;
            for (let j = i + 1; j < list.length; j++) {
                if (list[i] < list[j]) {
                    res = false;
                }
            }
            if (res) {
                this.buildcount++;
            }
        }
        console.log(`${this.buildcount} immeubles voient le coucher du soleil`);
    }
}
new Exo2(list);