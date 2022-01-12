const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

const checkNumbers = (x) => {

    let k = 17
    let n = 0

    for (let i = 1; i < (x.length); i++) {
        if (x[n] + x[i] == k) {
            return console.log(true);
        }

        if (i === x.length - 1) {
            i = n;
            i++;
            n++;
        }
    }
    return console.log(false);
};
checkNumbers(list);