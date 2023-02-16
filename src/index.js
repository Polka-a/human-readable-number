module.exports =
function toReadable(num) {
    if (num == 0) {
        return 'zero'
    }
    let numNames = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred'

    }

    let numNamesArr = (Object.keys(numNames)).map(Number)
    num = num.toString();
    let result = '';
    let length = num.length;

    function oneHundred(num) {
        result = '';
        if (num <= 100) {
            for (let i = 1; i < length + 1; i++) { // перебор чісла
                for (let a = 0; a < numNamesArr.length; a++) { // перебор массива
                    if (num == numNamesArr[a]) {
                        result = `${result}  ${numNames[numNamesArr[a]]}`
                        return result;
                    }

                    else if (num >= numNamesArr[a] && num < numNamesArr[a + 1]) {
                        result = `${result}${numNames[numNamesArr[a]]}`
                    }
                }
                num = num.slice(i);
            }
        }
        return result;
    }
    function oneThousand(num) {
        result = '';
        for (let a = 0; a < 10; a++) { // перебор массива с целью высчитать количество сотен
            if (num[0] == numNamesArr[a]) {
                result = `${result}${numNames[numNamesArr[a]]} hundred`
                break;
            }
        }
        num = num.slice(1);
        return `${result} ${oneHundred(num)}`;
    }
    if (num < 100) {
        return oneHundred(num).replace(/\s+/g, ' ').trim();
    } else if (num < 1000 && num >= 100) {
        return oneThousand(num).replace(/\s+/g, ' ').trim();
    }
}


// console.log(toReadable(0))