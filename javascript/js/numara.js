// Numbers 
console.log('****** Numbers ********');

console.log('\n');

let val;

// tip dönüşümleri 

val = Number('10'); // string to number 
val = parseInt('10'); // int degere döner 
val = parseFloat('10'); // float degere döner
val = isNaN('a10'); // true or false return. 

var num = 10.4555785;
val = num.toPrecision(6); // 6 karekteri yazar ve yuvarlama yapar ==> 10.4556 

val = num.toFixed(2); //virgülden sonra ki 2 değeri yazar ve yuvarlama yapar

// MATH OBJESİ İLE ÖZELLİKLERE ULAŞMA 
val = Math.PI; // pi sasyısına ulaşma
val = Math.round(2.4); // en yakın sayıya yuvarlar round metotu  
val = Math.round(2.7);
val = Math.ceil(3); // her zaman yukarı yuvarlar ceil metodu 
val = Math.floor(2.7); //her zaman aşağıya yuvarlar floor metodu 
val = Math.sqrt(64); // kare kökünü alır parantez içinde ki rakamın 
val = Math.pow(2,8); // üssünü alır 
val = Math.abs(-100); // her zaman pozitifini mutlak değerini veriri 
val = Math.min(1,2,5,6,78,3,6); //her zaman en küçük sayıyı bulur ==> 1
val = Math.max(1,5,8,78,33,364); //her zman en yüksek sayıyı bulur ==> 364 
val = Math.random(); // rast gele sayı üretir 0 ile 1 arasında 
val = Math.random()*10; // 0 ile 9 arası sayı verir 
val =Math.floor(Math.random()*100); // vir gül ortadan kalkar 0 ile 99 arası
val =Math.floor(Math.random()*100+1);// 1 ile 100 dahil arasında rast gele sayı verir 