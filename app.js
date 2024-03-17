// Number , Symbol - metodlari

// let son = 5e9; // 5 * 10 **9 degan manoda

// ---------------UY ISHI--------------

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function namuna(n) {
//   return (n *(n + 1)) /2
// }

// console.log(namuna(10));

// 102Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function Namuna(number, obj) {
//     let min = obj.min;
//     let max = obj.max;
//     if (number >= min && number <= max) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(Namuna(4, { min: 0, max: 5 }));

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function Namuna(number) {
//   var son = number * number;
//   var lastDigit = son % 10;
//   if (lastDigit === number) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(Namuna(1));

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// function Namuna(massiv) {
//     var yangiMassiv = [];
//     for (var i = 0; i < massiv.length; i++) {
//         yangiMassiv.push(massiv[i] + i);
//     }

//     return yangiMassiv;
// }

// console.log(Namuna([0, 0, 0, 0, 0]));

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// function Namuna(number) {
//     return String(number).length;
// }

// console.log(Namuna(123));

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.

// function Namuna(number) {
//     var strNum = String(number);
//     var sortedDigits = strNum.split('').sort((a, b) => b - a);
//     return parseInt(sortedDigits.join(''));
// }
// console.log(Namuna(123));

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function Namuna(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(Namuna(5, 9));

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.

// function Namuna(string) {
//     var katta_harf_son = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] >= 'A' && string[i] <= 'Z') {
//             katta_harf_son++;
//         }
//     }
//     return katta_harf_son;
// }
// console.log(Namuna("fvLzpxmgXSDrobbgMVrc"));
