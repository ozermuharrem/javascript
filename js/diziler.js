// Arrays 

let names = ['ahmet','betül','muharrem','yumak','ev'];

let years = [2017,1991,1990,2021,2007];

let mix = ['kamil','hayri',1905,null,['at','avrat']];

// diziler yukarıda ki gibi string intager veya her ikisinden oluşan ve iç içe oluşturalabilir. 


// get array item (diziden eleman alma )

console.log(names[4]); // ==> 'ev' çıkar names dizisinin 4.üncü elamanını yazdırır


// set array item (dizilere eleman ekleme)

names[5] = 'metin'; // diziye metin karekterini ekledik 5. eleman 

names[names.length]='güler'; // bu örnekte en son hangikarekter boş ise ona atama yapar. names.lenght 6 sonucu çıkıyor yani names dizisinin 6. elemanı güler oldu. yani 200 karekterli bir dizi olabilir ve kaçta kaldığımızı bilmiyoruz .length ile kaldığı yerden devam ederek ekler 

// add item

years.push(1988); // en sona atama yapar 
years.unshift(1977); // en başa atar 

// remove item 


years.pop(); // en sonda ki eleman silinir 
years.shift(); // en başta ki eleman silinir 

// indexOf 

let index = names.indexOf('yumak'); // dizinin içerisinde kaçıncı eleman olduğunu çıkartır 

// reverse 
console.log(names);

names.reverse(); // en başta ki elemanı en sona atar yer değiştirtir tam ters yapar  


console.log(names); 

// sort 
console.log(years);

years.sort();  // sıraya sokar string de alfabeye göre int değerlerde ise ilk rakama göre [1,5,18,22,34,35,51,378] dizisini [1,18,22,34,35,378,5,51] şeklinde sıralar 

console.log(years);

//concat (dizi birleştirme )

let val = years.concat(names);

console.log(val); 

// splice 
console.log(names)
names.splice(2,2,'aslı'); // bu örnekte 2 elemandan sonra ki 2 elemanı sil aslı elemannı ekle dedik 
names.splice(2,0,'mert'); // burada ise 2 elemandan sonra silme mert elemanını ekle 
console.log(names);

// find 

function over18(deneme){
    let age = 2018-deneme;
    return age >=18;
} // bu fonksiyon da deneme ye değer atayacağız atadığımız değerden 2018 i çıkartıp age değikenine atayacak çıkan sonuç 18 den büyük veya eşit ise true sonucu dönecek değilse false dönecek; 

console.log(over18(1990));

function over19(years){
    let age = 2021-years;
    return age >=18;
}

let over = years.find(over19);

console.log(years);

console.log(over); //==> 1990 

// yukarıuda ki örnekte dizi içerisinde ki tüm sayılara baktı ve 18 den büyük veya eşlit olan ilk dizi karekterini bastı 

// filter  

// yukarıda ki örnekte find fonksiyonu ile koşulu sağlayan ilk elemanı yazdırdır 

//filter metodu ile koşulu sağlayan tüm dizi elemanlarını listeler 


let ovr = years.filter(over19);

console.log(ovr); // ==> 1990,1991 olarak ovr değişkenini içerisine atadı 