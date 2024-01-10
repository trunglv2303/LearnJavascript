let x=5, y=6,z=7;
console.log("Test String",'x=',x,'y=',y,'z=',z);
console.log("Test String222:",'x='+x+'y='+y+'z='+z);
//ham trim().length= loại bỏ khoảng trắng tính độ dại của chuổi
let a="Tôi là string - chuỗi";
let text='we are the so-callerd "VIKINGS"from the north';
console.log(a);
console.log(text);
let d='5';
let e=Number(d); // chuyển string về number
let ee=+d; // chuyển string về number
console.log(a===d) //false ;
console.log(typeof a);
console.log(typeof d);
//String Template 
let num1=5;
let num2=10;
console.log('Fifteen is'+(num1+num2)+'and\nnot'+(2*num1+num2)+'.');
console.log(`Fifteen is ${num1+num2} and not ${2*num1+num2}.`);
//object
let people= {
    name: 'LeVanTrung',
    address:'QuangNam'

}
console.log('What your name ?','Myname',people.name);
let num3='5';

console.log(num1===num3) //false
// ===type,value
//== so sanh gia tri
//arrom function

// function sum(a1,b1){
//     return a1+b1;
// }
let sum=(a1,b1)=>{
    return a1+b1;
};
console.log('check sum',sum(4,5));