// Operatörler 

let val;
const a = 10;
const b = 5;
let c = 3;

// 1- Aritmatik Oreratörler
val = a+b; // + toplama opr.

console.log(val);
console.log(typeof val);

val = a-b; // - çıkartma opr.

console.log(val);
console.log(typeof val);

val = a*b; // * çarpma opr. 

console.log(val);
console.log(typeof val);

val = a/b; // / bölme opr. 

console.log(val);
console.log(typeof val);

val = a%b; // % mod alma opr. 

console.log(val);
console.log(typeof val);

val = c++; // ++ 1 arttırma opr. 

// c değerini önce val değerinin içerisine atar daha sonra c değerini arttırır. 

console.log(c);
console.log(val);
console.log(typeof val);

val = ++c; // burda önce c yi arttırıp val değerine atar

console.log(val);
console.log(typeof val);

// 2- Atama Operatörleri 

val = a; // = atama opr.

console.log(val);
console.log(typeof val);

val += a; // = bu da atama fakat val = val + a  işlemi yapar 

val -= a; // val = val - a 

console.log(val);
console.log(typeof val);

val *= a; // val = val * a

console.log(val);
console.log(typeof val);

val /= a; // val = val / a

console.log(val);
console.log(typeof val);

val %= a; // val = val % a 

console.log(val);
console.log(typeof val); 

// 3- Karşılaştırma Operatörü  

val = a==b; // val a ve b ye eeşitmi output false çıktı 

console.log(val);
console.log(typeof val); 

val = a===b; // 3 adet eşittirde hem değe33r kontrolü hemde tip kontrolü yapıyor 

console.log(val);
console.log(typeof val); 

val = 5 === 5; // true çıktı 

console.log(val);
console.log(typeof val); 

val = 5 === '5'; //false çıktı 

console.log(val);
console.log(typeof val);

val = a!=b; // eşit değil mi 

console.log(val);
console.log(typeof val);


val = a!==b; //tip kontrolü de yapar 

console.log(val);
console.log(typeof val);

val = a > b; // büyük mü 

console.log(val);
console.log(typeof val);

val = a < b; // küçük mü

console.log(val);
console.log(typeof val);

val = a >= b; // büyük eşit mi 

console.log(val);
console.log(typeof val);


// 4- Mantıksal Operatörler  
    // && and iki sininde doğru oluması durumunda doğru çıkar bir tanesi yanlış ise sonuç yanlıştır 
    val = (a>b) && (a<b);
    console.log(val);
    console.log(typeof val);
    // || or ikisinden birisinin doğru olması yeterli 
    val = (a<b) || (a>c);

    console.log(val);
    console.log(typeof val);
    // ! not tam tersine döndürür 
    // !true => false 
    // !false => true 


    val = !(a<b);

    console.log(val);
    console.log(typeof val);