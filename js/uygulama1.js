// ** Bir müşterinin aşağıda ki bilgileri için değişken oluşturun. 

// ** Müşteri adı
var customerName='Ahmet';
// ** Müşteri soyadı
var customerLastName='Özer';
// ** Müşteri tc kimlik no
var tcnu = '45430303406';
// ** Müşteri sipariş toplamı
var order1 =Number('100');
var order2 =Number('150');

var total = order1+order2;

console.log(total);

var order3 =Number('125.4');
var order4 =Number('254.7');

var total2 = order3+order4;

console.log(total2);

//eğer float değer istemiyorsak

//Number fonksiyonunu parseInt yaparsak int deger yani tam sayı değeri olduğu için virgülden sonra ki kısım görnmez 
var order3 =parseInt('125.4');
var order4 =parseInt('254.7');

var total2 = order3+order4;

console.log(total2);
// ** Müşteri cinsiyet
var gender = 'erkek';
// ** Müşteri adres bilgisi 
var address ={
    sehir:'Tokat',
    ilce:'Merkze',
    mah:'Büyükbey'
} 

// ** Müşteri hobileri 

var hobi = ['Sinema','Kitap'];

// ** Müşterinin yaşını hesaplayınız dt 1986

var yearOfBirth = 2017;

console.log(new Date().getFullYear()-yearOfBirth)

// ** 'Modern JavaScript Kursu' yazısının karekter sayısını bulun

var text = 'Modern JavaScript Kursu';

console.log(text.length); //boşluklar dahil