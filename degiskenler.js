var age;
console.log(age);

//değiskene atama yapılmadığı için 'undefined' yazar

age = 20;
console.log(age);

var fullname='Muharrem Özer';
console.log(fullname);

fullname='Ahmet Emir';
console.log(fullname);


//Değisken Tanımlama Kuralları 

//Sayısal İfade İle Başlayamaz 

// var 1yas; hatalı bir tanımlama 

var yas1;
var _yas2;
var $yas3;

//yukarıda ki örnekler uygun tanımlamalarıdır. 

// Komut İsimleri İle Tanımlama Yapılamaz 

// var for veya var swich gibi 

//Biden Fazla Kelime 

var ad='Muharrem';
var soyad='Özer';

// var ad soyad='Muharrem Özer'; gibi bir tanımlama yapılamaz; 

var ad_soyad='Muharrem Özer';

// case sensitive (büyük küçük harf duyarlılığı)

var firstName='Ahmet';
var FristName='Emir';

console.log(firstName);
console.log(FristName);

// var, let, const 

/* var ile tanımlanan herşey let ile de yazılabilir. Scope kavramı ile bu ayrım ortaya çıkacak.
const ise sabit olan bir tanımlamadır değişmez. Değiştirilmeyecek sabit olan değerler const ile tanımlanır. */ 

let ctiy='Tokat';
console.log(ctiy);

const email='abc@gmail.com';
console.log(email);

// email='cda@gmail.com';
console.log(email);

//Değişken Tipleri 

// Primitive Types 
    //String 
    console.log(typeof firstName);
    //typeof kodu değişkenin türünü gösterir

    //Number 
    console.log(typeof age);

    //Boolean 
    //Koşul Durumunda Kulanılır doğru yada yanlış 
    let isActive= true;

    console.log(typeof isActive);

    //null 
    let job=null;

    //manası boşluğu temsil eden anlamıda 

    console.log(typeof job);

    //objekt türü dödü bu null bir istisna dır 

    //undefined 

    let car;

    console.log(typeof car);

// Reference Types - Objects
    //Array
    let isim=['Muharrem','Betül','Ahmet'];
    console.log(typeof isim);

    //Object 

    let address = {
        sehir : 'Tokat',
        ulke :'Turkiye',
    }

    console.log(typeof address);

    // Function 

    var calculate = function(){
        return 0;
    };

    console.log(typeof calculate);


// TÜR DÖNÜŞÜMÜ 

let num1 = '5';
let num2 = '10';

console.log(num1+num2);
console.log(typeof num1);

//yukarıda 5 ve 10 u sitring olarak output 510 olarak çıkar. 

let num3 =Number('5');
let num4 =Number('10');

console.log(num3+num4);
console.log(typeof num3);

let val;

//number to string

val = String(10);

console.log(val);
console.log(typeof val);
console.log(val.length); //basamak sayısını yazdırmak için 'length' kullanılmaktadır 

// bool to string 

val = String(true);

//true bool veri tipi fakat string oldu

//date to string

val = new Date();

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date().getFullYear());

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date().getMinutes());

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date().getDay());

console.log(val);
console.log(typeof val);
console.log(val.length); 

//array to string 

val = String([1,2,3,4,5]);

//toString 

val = (10).toString();
val = (false).toString();

//String to Number 

// a b x gibi string ifadenel numaraya çevrilemez 

val = Number('10');

console.log(val);
console.log(typeof val);
console.log(val.length); // undefined çıkarttı çünkü number bir ifade olduğu için kaç karekterli olduğunu saymadı. 

val = Number(true);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // toFixed noktadan sonra girilen değer kadar sıfır atar

val = Number(false);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(null);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//string bir değer olduğu için console "NaN" çıktısı verdi   

val = Number('a');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


val = Number([1,2,3,4,5]);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//Number metoduna karşılık gelen "parseInt" ve "parseFloat" metodu var 

val = parseInt('10');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseFloat('10.5');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));