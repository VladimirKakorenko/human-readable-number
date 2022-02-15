module.exports = function toReadable (x) {
    let readable = '';
    let string = x.toString();
    if (string.length === 3){
        switch (string[0]){
            case '9':
                readable += 'nine hundred ';
                break;
            case '8':
                readable += 'eight hundred ';
                break;
            case '7':
                readable += 'seven hundred ';
                break;
            case '6':
                readable += 'six hundred ';
                break;
            case '5':
                readable += 'five hundred ';
                break;
            case '4':
                readable += 'four hundred ';
                break;
            case '3':
                readable += 'three hundred ';
                break;
            case '2':
                readable += 'two hundred ';
                break;
            case '1':
                readable += 'one hundred ';
                break;
        }
        switch (string[1]){
            case '9':
                if (string[2] === '0'){
                    readable += 'ninety';
                }else {
                    readable += 'ninety ';
                }
                break;
            case '8':
                if (string[2] === '0'){
                    readable += 'eighty';
                }else {
                    readable += 'eighty ';
                }
                break;
            case '7':
                if (string[2] === '0'){
                    readable += 'seventy';
                }else {
                    readable += 'seventy ';
                }
                break;
            case '6':
                if (string[2] === '0'){
                    readable += 'sixty';
                }else {
                    readable += 'sixty ';
                }
                break;
            case '5':
                if (string[2] === '0'){
                    readable += 'fifty';
                }else {
                    readable += 'fifty ';
                }
                break;
            case '4':
                if (string[2] === '0'){
                    readable += 'forty';
                }else {
                    readable += 'forty ';
                }
                break;
            case '3':
                if (string[2] === '0'){
                    readable += 'thirty';
                }else {
                    readable += 'thirty ';
                }
                break;
            case '2':
                if (string[2] === '0'){
                    readable += 'twenty';
                }else {
                    readable += 'twenty ';
                }
                break;
            case '1':
                switch (string[2]){
                    case '9':
                        readable += 'nineteen'
                        break;
                    case '8':
                        readable += 'eighteen'
                        break;
                    case '7':
                        readable += 'seventeen'
                        break;
                    case '6':
                        readable += 'sixteen'
                        break;
                    case '5':
                        readable += 'fifteen'
                        break;
                    case '4':
                        readable += 'fourteen'
                        break;
                    case '3':
                        readable += 'thirteen'
                        break;
                    case '2':
                        readable += 'twelve'
                        break;
                    case '1':
                        readable += 'eleven'
                        break;
                    case '0':
                        readable += 'ten'
                        break;
                }
                break;
        }
        if (string[1] !== '1'){
            switch (string[2]){
                case '9':
                    readable += 'nine';
                    break;
                case '8':
                    readable += 'eight';
                    break;
                case '7':
                    readable += 'seven';
                    break;
                case '6':
                    readable += 'six';
                    break;
                case '5':
                    readable += 'five';
                    break;
                case '4':
                    readable += 'four';
                    break;
                case '3':
                    readable += 'three';
                    break;
                case '2':
                    readable += 'two';
                    break;
                case '1':
                    readable += 'one';
                    break;
            }
        }
    }else if (string.length === 2){
        switch (string[0]){
            case '9':
                if (string[1] === '0'){
                    readable += 'ninety';
                }else {
                    readable += 'ninety ';
                }
                break;
            case '8':
                if (string[1] === '0'){
                    readable += 'eighty';
                }else {
                    readable += 'eighty ';
                }
                break;
            case '7':
                if (string[1] === '0'){
                    readable += 'seventy';
                }else {
                    readable += 'seventy ';
                }
                break;
            case '6':
                if (string[1] === '0'){
                    readable += 'sixty';
                }else {
                    readable += 'sixty ';
                }
                break;
            case '5':
                if (string[1] === '0'){
                    readable += 'fifty';
                }else {
                    readable += 'fifty ';
                }
                break;
            case '4':
                if (string[1] === '0'){
                    readable += 'forty';
                }else {
                    readable += 'forty ';
                }
                break;
            case '3':
                if (string[1] === '0'){
                    readable += 'thirty';
                }else {
                    readable += 'thirty ';
                }
                break;
            case '2':
                if (string[1] === '0'){
                    readable += 'twenty';
                }else {
                    readable += 'twenty ';
                }
                break;
            case '1':
                switch (string[1]){
                    case '9':
                        readable += 'nineteen'
                        break;
                    case '8':
                        readable += 'eighteen'
                        break;
                    case '7':
                        readable += 'seventeen'
                        break;
                    case '6':
                        readable += 'sixteen'
                        break;
                    case '5':
                        readable += 'fifteen'
                        break;
                    case '4':
                        readable += 'fourteen'
                        break;
                    case '3':
                        readable += 'thirteen'
                        break;
                    case '2':
                        readable += 'twelve'
                        break;
                    case '1':
                        readable += 'eleven'
                        break;
                    case '0':
                        readable += 'ten'
                        break;
                }
                break;
        }
        if (string[0] !== '1'){
            switch (string[1]){
                case '9':
                    readable += 'nine';
                    break;
                case '8':
                    readable += 'eight';
                    break;
                case '7':
                    readable += 'seven';
                    break;
                case '6':
                    readable += 'six';
                    break;
                case '5':
                    readable += 'five';
                    break;
                case '4':
                    readable += 'four';
                    break;
                case '3':
                    readable += 'three';
                    break;
                case '2':
                    readable += 'two';
                    break;
                case '1':
                    readable += 'one';
                    break;
            }
        }
    }else {
        switch (x) {
            case 9:
                readable += 'nine';
                break;
            case 8:
                readable += 'eight';
                break;
            case 7:
                readable += 'seven';
                break;
            case 6:
                readable += 'six';
                break;
            case 5:
                readable += 'five';
                break;
            case 4:
                readable += 'four';
                break;
            case 3:
                readable += 'three';
                break;
            case 2:
                readable += 'two';
                break;
            case 1:
                readable += 'one';
                break;
            case 0:
                readable += 'zero';
                break;
        }
    }
    return readable;
}
