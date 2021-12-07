/* 
yazdığımız javascript kodlarının tarayıcı üzerinde nasıl çalıştığını
daha iyi anlayabilmek için window objesini anlamkta fayda var 

Tarayıcı içerisinde "ENGINE" isimli bir program var

Bu program js kodları makine koduna çeviriyor daha sonra dan hata var mı yok mu kontrol ediyor. 

Her hangi bir sorun yoksa tarayıcıda sonuçları gösteriyor. 

ENGINE ye sahip olan tarayıcılar kodlarımızı işletip bize çıktı verebiliyor 


JavaScript in son zamanlar da popiler olmasının sebebi sadece taarayıcıya bağımlı olmadan NodeJS yapısı içerisinde de çalıştırılabiliyor olmasıdır. 

Nodejs i ayrı bir program olarak düşünüldüğünde JavaScript Engine bu programa yüklü ve bu tarayıcıya bağımlı değil.

Dolayısıyla Js de biz Aps.Net nvs gibi surver tabanlı web programlama gibi kullana biliyoruz js bu sebepten dolayı çok popiler oldu 

Trayıcı tarafında çalışan kodlar ile Node.Js taarafında çalıştırılan kodların arasında ki fark tarayıcı tarafına yüklü olan Window objesi aracılığı ile yapılmasıdır. 

Bizim tarayıcımızda Engine ek olarak window objesi yüklü

Window objesini kullanarak sayfa üzerinde ki her hangi bir etiketi kolaylıkla ulaşabiliyoruz. 

*/
let val;
var a = 10;

function abc(){
    return 0;
}

val = window;
console.log(val);

// alert methodu (tarayıcıden mesaj gider )

alert('Window');

// prompt metotu (vullanıcıdan değer almak için)

var b = prompt('Bir Sayı Giriniz');

console.log(b); 

// confirm metodu (kullanıcıdan onay almak için)

var c = confirm('Eminmisiniz ? ');

console.log(c); //==> tamam seçenegini tıklarsak true değerini alır 

if(c){
    console.log('ok')
}
else{
    console.log('no')
}

// yıkarıda ki gibi sonucun true veya false çıkması durumuna göre karar yapıları kullanabiliriz 

// scroll özelligi 

val = scrollX;
val = scrollY; 

console.log(val);

// val değerine scrollbar ın konumu atandı 

// locatin özelliği (şuanki tarayıcının adrtesi ile ilgili bilgileri direk alabiliyorum)

val = location;

console.log(val); // tek tek de bakılabilir 

val = location.href;

console.log(val);

val = location.hostname;

console.log(val);

// window.location.reload(); // sayfayı sürekli yeniler

val = window.navigator; // tarayıcı ile ilgili ekstra bilgileri obje olarak döndürür bizim sitemizi ziyaret edenlerin 



console.log(val);

window.document.getElementById('header'); 

// bu document.getByElementById('ıd ismi') html sayfasında etikete verilen ıd yi getirir 