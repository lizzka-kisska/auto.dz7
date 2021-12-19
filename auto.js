let fs = require('fs');
let arg = process.argv;
let s = fs.readFileSync(arg[2]).toString();
let t = fs.readFileSync(arg[3]).toString();
let m=t.length;
alph=new Array();

//Определяем алфавит строки t 
for(let i=0;i<m;i++)
    alph[t.charAt(i)]=0

//В двумерном массиве del храним таблицу переходов 
del=new Array(m+1)
for(let j=0;j<=m;j++)
    del[j]=new Array()

//Инициализируем таблицу переходов 
for(i in alph)
    del [0][i]=0

//Формируем таблицу переходов 
for(let j=0;j<m;j++){
    prev=del[j][t.charAt(j)]; //буква на j
    del[j][t.charAt(j)]=j+1;
    for(i in alph)
        del[j+1][i]=del[prev][i]
}
// //Выводим таблицу переходов 
// for(let j=0; j<=m; j++) {
//     out='';
//     for(i in alph) 
//         out+=del[j][i] + ' '; 
//     console.log(out);
// }
let state = 0;
result = new Array();
for (let i=0; i<s.length; i++) {
    if (s.charAt(i) in alph) 
        state = del[state][s.charAt(i)];
    else
        state = 0;
    if (state == m) 
        result.push(i-m+2);
}
console.log(result);