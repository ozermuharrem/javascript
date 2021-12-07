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

her fonksiyonlar kendi scope lerini oluşturur 

her fonksiyon içerisine tanımlanan degisken o fonksiyona özeldir 

*/

function logAge(){
    var age = '15';
    console.log('age',age);
}

logAge();

console.log(age); // ==> age is not defind hata verdi 

// age değişkeni fonksiyonun içerisinde tanımlandığı için fonksiyon dışında ulaşılamadı. 

