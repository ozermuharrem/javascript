// 1- Can ve Ada'nın boy ve kilo bilgilerini alınız. 

const kgCan = 80;
const kgAda = 52;
const heightCan = 1.70;
const heightAda = 1.50;

// 2- Alınan bilgilere göre boy ve kilo endeksini hesaplayınız

var indexCan = (kgCan) / (heightCan*heightCan);
var indexAda = kgAda / (heightAda*heightAda);

console.log("Can'ın Boy Kilo Endexi",indexCan.toFixed(2));
console.log("Ada'nın Boy Kilo Endexi",indexAda.toFixed(2));

// ** Formül: Kişinin Kilosu / Boy Uzunluğunun Karesi 
// 3- Hesaplanan index kilosuna göre karşılaştırma yapın



// 4- aşağıda ki tabloya göre Can ve Ada hangi gruba giriyor 

console.log("Can ;");

if(indexCan < 18.4)
{
    console.log("Zayıf",indexCan.toFixed(2));
}
else if(indexCan >= 18.5 && indexCan <= 24.9)
{
    console.log("Normal",indexCan.toFixed(2));
}
else if(indexCan >= 25 && indexCan <= 29.9)
{
    console.log("Fazla Kilolu",indexCan.toFixed(2));
}
else if(indexCan >=30.01)
{
    console.log("Obez",indexCan.toFixed(2));
}
else{
    console.log("Direk Doktora");
}

console.log("Ada ;");

if(indexAda < 18.4)
{
    console.log("Zayıf",indexAda.toFixed(2));
}
else if(indexCan >= 18.5 && indexAda <= 24.9)
{
    console.log("Normal",indexAda.toFixed(2));
}
else if(indexCan >= 25 && indexAda <= 29.9)
{
    console.log("Fazla Kilolu",indexAda.toFixed(2));
}
else if(indexAda >=30.01)
{
    console.log("Obez",indexAda.toFixed(2));
}
else{
    console.log("Direk Doktora");
}
//0-18,4:zayıf
//18,5-24,9: Normal
//25,00-29,9: Fazla Kilolu
//30,0-34,9: Şişman (Obez)

// --------------------**------------------------------- //

// ------------Hocanın Yaptığı----------------//

console.log("Bu Kısımdan Sonrasını Hocanın Yaptığı");

// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCans;
let IndexAdas;

const kgCans = 60;
const kgAdas = 40;

const heigtCans = 1.70;
const heigtAdas = 1.50;

IndexAdas = (kgAdas) / (heigtAdas*heigtAdas);
IndexCans = (kgCans) / (heigtCans*heigtCans);

console.log(IndexAdas.toFixed(2),IndexCans.toFixed(3));

let adaHigherIndex = IndexAdas>IndexCans;
let canHigherIndex = IndexCans>IndexAdas;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : "+adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : "+canHigherIndex);

let AdaZayif = (IndexAdas>=0) && (IndexAdas<=18.4);
let AdaNormal = (IndexAdas>=18.5) && (IndexAdas<=24.9);
let AdaKilolu = (IndexAdas>=25) && (IndexAdas<=29.9);
let AdaSisman = (IndexAdas>=30) && (IndexAdas<=34.9);

console.log("Ada zayıf :"+AdaZayif);
console.log("Ada'nın kilosu normal : "+AdaNormal);
console.log("Ada kilolu mu : "+AdaKilolu);
console.log("Ada şişman mı : "+AdaSisman);

