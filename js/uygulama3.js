console.log('******* UYGULAMA 3 ********');

console.log('\n');

// Şimdi ki tarihin gün ay ve yıl bilgilerini yazınız.  

console.log("1- Şimdi ki tarihin gün ay ve yıl bilgilerini yazınız.");

var dt = new Date();

console.log("Month =>",dt.getMonth()+1);
console.log("Date ==>",dt.getDate());
console.log("Year ==>",dt.getFullYear());

console.log(dt);
console.log('\n');

// Tarih ve saat bilgisini içeren bir Data Objesi oluşturun. 

console.log("2-Tarih ve saat bilgisi içeren bir Date Objesi oluşturun.");

var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010,7,24,14,50,10);

console.log("dtA ==>",dtA);
console.log("dtB ==>",dtB);

console.log('\n');


// 1/1/1990 tarihinden 1 gün öncesini gösteriniz. 

console.log("3- 1/1/1990 tarihinden 1 gün öncesini gösteriniz.");

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate(); // ayın kaçıncı günü olduğunu aldık

dtC.setDate(dayOfMonth-1);

console.log(dtC);

console.log('\n');

// İki tarih arasında ki geçen zamanı bulun. 

console.log("4- İki zaman arasında ki geçen zamanı bulunuz.");

var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

// end - start dediğimizde milsaniye türünde sonuuç dödürecek bize js çıkan sonucu da ms ye atayacagız 

var millisecond = end-start;  
var saniye = millisecond / 1000;
var dk = saniye / 60;
var saat = dk / 60;
var gun = saat / 24;
// mili saniyeyi gün e çevirdik 

console.log('mili saniye :', millisecond);
console.log('saniye :',saniye);
console.log('dakika :', dk);
console.log('saat :', saat);
console.log('gün :',gun);

console.log('\n');

//Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır. 

console.log("5- Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır.");

var annelerGunu = new Date(); // bu gün ki deger
annelerGunu.setHours(0,0,0,0); // saat verisi lazım değil sıfırladık 
annelerGunu.setFullYear(2022); // hangi yıl lazımsa 
annelerGunu.setDate(1); // gün bilgisi 1 inci güne atandı 
annelerGunu.setMonth(4); // 0 dan başladığı için mayıs 4 e denk gelir 

while(annelerGunu.getDay() != 0)
{
    annelerGunu.satDate(annelerGunu.getDate()+1)
}

annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

console.log('\n');

// Yaş Hesaplama nasıl yapılır ? 

console.log("6- Yaş Hesaplama nasıl yapılır ?");

var birthday = new Date('02/01/1991');

console.log("1970 yılından 01/02/1991 yılı arasında ki farkın milisaniyesi :",birthday.getTime()); // 1970 yılından 02/01/1991 yılına kadar olan geçen zamanın mili saniyesidir. 

// 1970 den başlar js date !! 

var ageDifMs = Date.now() - birthday.getTime(); //Date.now metodu ile şimdiki zamanın milisaniyesini alıdık 

// çıkan değerden 1970 yılını çıkartmamız lazım 

var ageDt = new Date(ageDifMs);
console.log("Kullanıcının Yaşı :",ageDt.getFullYear()-1970);


//console.log(Date.now()); // şimdi ki tarihin milisaniyesine ulaşırız 