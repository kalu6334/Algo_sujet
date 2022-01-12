const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const res = data.split(' ').map((number) => Number.parseInt(number));

var count1 = 0

function bubletri(res) {

    for (let i = 0; i < res.length - 1; i++) {
        count1++;
        for (let j = 0; j < res.length - 1 - i; j++) {
            count1++;
            if (res[j] > res[j + 1]) {
                [res[j], res[j + 1]] = [res[j + 1], res[j]]
            }
        }
    }
    return res;
}
bubletri(res)
console.log(`Tri à bulle : ${count1} comparaison -`, bubletri(res));
//---------------------------------------------------------------------------------------
var count2 = 0

function insersionTri(res) {
    //nombre des éléments dans le resleau
    var len = res.length;
    var tmp, i, j;

    for (i = 1; i < len; i++) {
        count2++;
        //stocker la valeur actuelle 
        tmp = res[i]
        j = i - 1
        while (j >= 0 && res[j] > tmp) {

            // déplacer le nombre
            res[j + 1] = res[j]
            j--
        }
        //Insère la valeur temporaire à la position 
        //correcte dans la partie triée.
        res[j + 1] = tmp
        count2++
    }
    return res
}
insersionTri(res)
console.log(`Tri par insertion : ${count1} comparaison -`, insersionTri(res));
//---------------------------------------------------------------------------------------
var count3 = 0

function sélectionTri(res) {
    for (var i = 0; i < res.length; i++) {
        count3++
        //stocker l'index de l'élément minimum
        var min = i;
        for (var j = i + 1; j < res.length; j++) {
            count3++
            if (res[j] < res[min]) {
                // mettre à jour l'index de l'élément minimum
                min = j;
            }
        }
        var tmp = res[i];
        res[i] = res[min];
        res[min] = tmp;
    }
    return res;
};
sélectionTri(res)
console.log(`Tri par sélection : ${count3} comparaison -`, sélectionTri(res));
//---------------------------------------------------------------------------------------
var count4 = 0
const quickSort = (res) => {
    const list = [...res]

    if (list.length < 2) {
        return list
    }

    const pivot = list[0]

    const smaller = list.filter((item) => item < pivot)
    count4++
    const bigger = list.filter((item) => item > pivot)
    count4++
    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}
quickSort(res)
console.log(`Tri rapide : ${count4} comparaison -`, quickSort(res));

//------------------------------------------------------------------------------
var count5 = 0

const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEL = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];
        if (leftEL < rightEl) {
            output.push(leftEL);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
        count5++;
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};
// recursive
const mergeSort = res => {
    if (res.length <= 1) {
        return res;
    }
    const middleIndex = Math.floor(res.length / 2);
    const leftArr = res.slice(0, middleIndex);
    const rightArr = res.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

mergeSort(res)
console.log(`Tri fusion : ${count5} comparaison -`, res);