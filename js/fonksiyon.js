// funktions 

function yasHesaplama(dogumYili){
    return 2021 - dogumYili;
}

let val = yasHesaplama(1990);

console.log(val);

function emeklilik(dogumYili , isim){
    let yas = yasHesaplama(dogumYili);
    let emekli = 65- yas;

    if (emekli > 0){
        console.log(`${isim}Emeklili olmanıza ${emekli} yıl kaldı`);
    }
    else{
        console.log('Zaten Emekli Oldunuz')
    }
}


emeklilik(1932, 'Muharrem');


let toplam;
function mesai(saat){

    return saat * 11.37;
    
}
let maas;

maas = mesai(10);

console.log(maas);

if(maas < 100){
    console.log('az çalışmıssın');
}
else{
    console.log('gayet basarılı');
}

// Function Declaration & Expression 

//Declaration tanımlama yöntemi 

function sum(a,b){
    var c = a+b;
    return c;
}

console.log(sum(10,20));

// yukarıda ki bir yöntemdir aynısını farklı bir yöntemle aşağıda yapacağım

// Expression Yöntem

let mus = function(c,d){
    var e=c+d;
    return e;
}

console.log(mus(11,22));

// yukarıda ki örnek te değişken tanımlarken fonksiyon tanımlama işlemiğ 

console.log(mus(11)); // ==> NaN
console.log(mus(11,22,40)); // 40 değeri hesaba katılmaz göz ardı edilir 
console.log(mus(11,22));

/* 

b paremetresine bir değer verilmediği zaman 'undefiled' olur bu durumu eas6 ile gelen yeni bir özlellik ile çözülebiliyor

*/

/* bu örneği farklı değişkenlerde eski şekilde yazagacım */ 

const at = function(x,y){
    if (typeof x === 'undefined'){x = 0;}
    if(typeof y === 'undefined'){y = 0;}

    var z = x+y;
    return z;
}

console.log(at(20)); // ==> 20 

/* js es6 ile gelen yenilik ile */

const bet = function(j = 0, k = 0){
    var l = j+k;
    return l;
}

console.log(bet(41)); // ==> 41 sonuç 41 çıktı 

// burada k değişkenine değer atanmadığı zaman default olarak sıfır atanmıştır 

// k degerine hangi numarayı atarsak o  numara ile işlem yapar 


// ARGS dışarıdan veri alma 

// farklı parametreler gönderildiğinde kullanılır 

function args(){
    console.log(arguments);
}

args(10,20,30); // dizi dönderdi 

function sumAll(){
    var tpl = 0;

    for(let i = 0 ; i < arguments.length; i++){ // i argümanın sayısı kadar dönecek
        tpl += arguments[i]; // dışarıdan atanan değerlerin toplamı 
    }
    return tpl;
}

console.log(sumAll(10,20,33,22,35)); // ==>120 

// argüman kullanımı 

// argüman dizi



