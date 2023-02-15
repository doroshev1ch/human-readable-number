module.exports = function toReadable (number) {
    
    // if (number <= 20){
    //     switch (number){
    //     case 0: return 'zero';
    //     case 1: return 'one';
    //     case 2: return 'two';
    //     case 3: return 'three';
    //     case 4: return 'four';
    //     case 5: return 'five';
    //     case 6: return 'six';
    //     case 7: return 'seven';
    //     case 8: return 'eight';
    //     case 9: return 'nine';
    //     case 10: return 'ten';
    //     case 11: return 'eleven';
    //     case 12: return 'twelve';
    //     case 13: return 'thriteen';
    //     case 14: return 'fourteen';
    //     case 15: return 'fifteen';
    //     case 16: return 'sixteen';
    //     case 17: return 'seventeen';
    //     case 18: return 'eighteen';
    //     case 19: return 'nineteen';
    //     case 20: return 'twenty';
    //   }
    // }
    // for (let i = 0; i < number.length; i++){
    //     if (number > 20 && number < 30){
    //         number[0] = 'twenty';
    //         // обьект с ключ значение;
    //         switch (number[1]){ 
    //             case 1: return 'one';
    //             case 2: return 'two';
    //             case 3: return 'three';
    //             case 4: return 'four';
    //             case 5: return 'five';
    //             case 6: return 'six';
    //             case 7: return 'seven';
    //             case 8: return 'eight';
    //             case 9: return 'nine';
    //         }
    //     let num = number[0] + number[1];
    //     }
    //     return num.toString();
    // }
    // if (number > 20){
    //     switch (number){
    //         case 20: return 
    //         case 30: return
    //         case 40: return
    //         case 50: return
    //         case 60: return
    //         case 70: return
    //         case 80: return
    //         case 90: return
    //         case 100: return
    //     }
    // } 
    number = number.toString();
    let arr = Array.from(number);
    if (arr.length <= 1){
        arr = arr.join('');
        arr = Number(arr)
        switch (arr) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eigth';
            case 9: return 'nine';
        }
    } else if (arr.length === 2){
        switch (arr[0]) {
            case '2': return 'twenty';
            case '3': return 'thirty';
            case '4': return 'forty';
            case '5': return 'fifty';
            case '6': return 'sixty';
            case '7': return 'seventy';
            case '8': return 'eigthty';
            case '9': return 'ninety';
        }
        switch (arr[1]) {
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eigth';
            case '9': return 'nine';
        }
    }
}
