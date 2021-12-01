// Date Object 

let d = new Date();

console.log(d); // ==> Wed Dec 01 2021 00:29:26 GMT+0300 (GMT+03:00)


console.log(typeof d); // ==> object çıktı verir 

// obje aracılığı ile ne yapılabilir 

// get metodları 

console.log(d.getDate()); // ==> 1 (gün bilgisi çıktı)

console.log(d.getDay()); // ==> 3 (haftanın kaçıncı günü olduğunu gösterir 0 dan başlar 0 = Pazar dır Bu gün 3 Çarşamba )

console.log(d.getFullYear()); // ==> 2021 (yıl bilgisi )

console.log(d.getHours()); // ==> 0 (şuanki saat bilgisi) 

console.log(d.getMonth()); // ==> 11 ( 0 dan başladığı için Aralık 11 olarak çıktı)

console.log(d.getSeconds()); // ==> 17 (şuan ki saniye)

// set metotları (elimizde ki objenin istediğimiz kısımlarını değiştirebilmek için kullanılır )

let a = new Date(); // a ya şimdi ki  değer atandı 

console.log(a); // ==> Wed Dec 01 2021 00:41:27 GMT+0300 (GMT+03:00)

a.setFullYear(2017); // a nın yılı değişti 

console.log(a.getFullYear()); // ==> 2017

a.setMonth(8);

console.log(a.getMonth());

a.setDate(11);

console.log(a.getDate());

a.setHours(12); // a ya 12 saati atandı 

console.log(a.getHours()); // ==> 12 

console.log(a);

// -----

let brithday = new Date(1990,6,22); // doğım tarihi tanımladık 

console.log(d.getFullYear()-brithday.getFullYear()); // ==> 31 çıktı yaş hesaplama 

console.log(d.getMonth()-brithday.getMonth()); // ==> 5 

// Not // 

var dtA = new Date('7/23/1990 15:27:10'); // bu şekilde saat tarih ataması yapılabilir. 

// tek tırnak arasında tanımlandı !!!

console.log("dtA ==>",dtA);

var dtB = new Date(1990,6,23,15,27,10); // bu şekildede tanımlana bilir 

// TEMMUZ AYI YAZABİLMEK İÇİN 6 YAZDIK AY KISMINA NEDEN 0(SIFIR) DAN BAŞLADIĞI İÇİN 

// tırnak yazılmadan araya virgül eklenerek tanımlandı 

console.log("dtB ==>",dtB);