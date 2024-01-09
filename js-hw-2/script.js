


// Задание 1


let email = '   TyLerRakE@teSt.cOm    '.trim() .replace('.cOm','.uz')

console.log(email.replace('L', 'l') .replace('E', 'e') .replace('S', 's') .replace('O', 'o'),  email.endsWith('.uz') );


// Задание 2


let text = 'Lorem ipvum dolor jat amet consectetur,'  .replace(',' , '.')
let text2 = 'adipiscring elit,'.replace(',' , '.')
let text3 = 'Numquam,' .replace(',' , '.')
let text4= 'beataptFF,'.replace(',' , '.')

let texts = `${text} ${text2} ${text3} ${text4}`


let bec = `Текст состоит из ${texts.length} cимволов `


console.log(bec);
console.log(texts );
console.log(texts.slice(67,77) );
console.log(texts.slice(18,19) .toUpperCase() + texts   .slice(19,20) + texts.slice(8,9) + texts   .slice(19,20) , texts.slice(30,31)  .toUpperCase() + texts.slice(32,33) + texts.slice(37,38) + texts.slice(6,7) + texts.slice(7,8) + text.slice(20,21))

//




