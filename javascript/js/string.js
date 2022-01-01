// Strings 

const firstName = 'Muharrem';
const lastName = 'Ozer';
const age = 31;

let val;

// string concat (birleştirme) 

val = firstName + " "+ lastName; // 2 sitringi birleştirme 

val = 'Sadık';
val += ' Turan'; // bu şekilde de olur val içerisinde ki stringin üzerine ekler 

val = 'Benim Adım '+ firstName+ ' '+lastName+' ve yaşım '+ age;

val = firstName.concat(' ', lastName); // 


// string uppercase - lowercase (büyük küçük harfe çevirme)

val = val.toUpperCase(); // tüm harfler büyük harfe dönüşür 

val = val.toLowerCase(); // Tüm harfler küçük harfe dönüştü 

//val = val.indexOf('r'); // arama methodu ==> 4 çıktı yine 0 sıfırdan başlar ve ilk r harfı bulana kadar sayar eğer sonç -1 çıkar sa aranan karekter yoktur manasına gelir 

// substring (istediğimiz bölümü çıkartma)

// val = val.substring(3,5); // ==> ar çıktı verdi 

// slice(1,5) cümlenin 1 ve 5 inci karekteri arasını gösterir slice(7) bu fonksiyon ise 7 karekterden sonrasını gösterir 

// startsWith('text'); bu fonksiyon cümle text ile mi, başlar sorusunur çıktı true yada false dir  

//includes('text') bu fopnksiyon cümle içerisinde text var mı diye ara true yada false sonuç döndürür 

// val = val.slice(9); // bu seçtiğimiz bölümü getiri 

// string replace (değiştirme)

val = val.replace('muharrem' , 'ahmet');


// trim (başta ve sonda bulunan boşlukları siler alır)

val = val.trim(); 

// split metodu ayıtmak için kullanılır örnek aşağıda 

let hobi = 'kitap , resim , müzik , tiyatro , atabinme , yazılım';

val = hobi.split(',');


console.log(val);
console.log(typeof val);
