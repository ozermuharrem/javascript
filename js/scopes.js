/* 

Scopes Nedir ? 

yazdığımız bir değişkenin hangi kod parçası tarafından ulaşılabilri olup olmaması ile alakalıdır 
*/

// Global Scopes 

var names = 'Ahmet';

/* names değişkeni global olarak tanımlandı 

bu da demek oluyor ki her yerden değişkene ulaşabiliyoruz */

function newLine(){
    console.log('\n');
}

newLine();
console.log(names)

function logNames(){
    console.log(names);
}

logNames();


// Local Scope 

/* fonksiyon içerisine değikne tanımlanırsa 

her fonksiyonlar kendi scope larını oluşturur 

bloklar yeni scopları oluşturmaz

her fonksiyon içerisine tanımlanan degisken o fonksiyona özeldir 

*/

function logAge(){
    var age = '15';
    console.log('age',age);
}

logAge();

// console.log(age); // ==> age is not defind hata verdi 

// age değişkeni fonksiyonun içerisinde tanımlandığı için fonksiyon dışında ulaşılamadı. 

console.log('**********//**********')


if(true){
    var model = 'Opel';
    let year = 2019;
    const color = 'white';
    console.log('blok scope',model,year,color);
}

console.log('blok scope',model); 
// console.log('blok scope',year); // ==> year is not defined 
// console.log('blok scope',color); // ==> year is not defined 

// es6 ile gelen let ve const blok scope oluşturur 

/* 
var ile oluşturulan değiken dışarıda tanımlanır 

let ve const değikenler blok içerisinde kalır dışarıda terar yazılmaz 

bu bize nasıl bir avantaj sağlar 

global olarak tanımlanan değişken içerisinden birden fazla açılan bloklarda yanlışlıkla tekra açma ihtimali var 

let ve const local olarak tekrar değişken tanımlanırsa sadece o blok için geçerlidir ve globalde açılan aynı isimli değiken birbirinden etkilenmez. 

let ve const değişken tipleri var a göre daha çok kullanılmaktadır 


*/

let year = 2020;

console.log(year); // ==> 2020 olarak çıktı 

var a = 1;

for(var a = 0; a < 10; a ++){
    console.log('a',a);
}

console.log(a); // global olarak var tanımlandığında a nın değerini 10 çıkarttı 

// aynı örnegi let ile yaptığımızda ; 

let b = 1;

for(let b = 0 ; b < 10 ; b++){
    console.log('b',b);
}

console.log(b); //==> 1 let b olarak tanımlandığı için blok içerisinden çıkınca be nin değeri 1 olarak çıktı verdi. 

/* 
büyük bir projede birden fazla blok kullanma ihtiyacı duyulabilir. 

global olarak tanımlanan bir değikne blok içerisinde değeri değişip bütün projeyi etkileye bilir. 

bunun önünne geçe bilmek için local olarak tanımlanan değişkenlerin let ve const ile tanımlanması 

bu hatayı bulmak da zorlaşır büyük bir projede 

*/ 
