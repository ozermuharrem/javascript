// Function 

// bankamatik uygulaması yapacağız 

console.log('Özer Bank Ortak Atm Hoşgeldiniz');

console.log('\n');

var hesapA = {
    ad: 'Muharrem Özer',
    hesapNo: '256321212',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Betül Özer',
    hesapNo : '112322320',
    bakiye : 10002114,
    ekHesap : 10000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    //
    //return bakiye;

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye-miktar;
        console.log('Paranızı alabilirsiniz');
    }
    else{
        var toplam = hesap.bakiye + hesap.ekHesap;
        if(toplam >= miktar){
            if(confirm('ek hesabınızı kullanmak istermisiniz ? ')){
                var bakiye = hesap.bakiye;
                var ekHesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekHesap;
                console.log('Paranızı Alabilirsiniz ');
            }
            else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır`)
            }
        }
        else{
            console.log('Yeresiz Bakiye...');
        }
    }
}

/* burada dikkat etmemiz gereken obje bilgisinin değerlerini fonksiyon içerisinden değiştiriyoruz
Değiştirilmiş obje karşımıza geliyor 

burada bir objeyi yani "hesapA" yı fonksiyon içerisine gönderdiğimiz zaman kopyası gelmiyor çünkü hesapA referans tip ve bu objenin oluşturulduğu yer rem bellek üzerinde ki bir adrese karşılık geliyor 

biz hesapA objesinin koyasını göndermiyoruz direk adresini gönderiyoruz 

Dolayısıyla functiyon da ki hesap yerine hesapA nın adresi geliyor 

Dikkat : hesapA nın adresi geliyor 

Biz değişken olarak tanımlasaydık yani; 

var ad = 'Muharrem Özer';
var bakiye = 2000 ; 

şeklinde tanımlayıp fonksiyonda kullansaydık 

Kopyası üzerinden işlem yapılacağı için sonuç olarak bakiyenin değeri değişmezdi 

özetle primitiv tipler value tip oluyor 
ancak objeler fonksiyonlar pirimitiv tipler haricinde ki herşey referans tip oluyor 

*/

paraCek(hesapA,2000);
paraCek(hesapA,500);
console.log(hesapA.bakiye+hesapA.ekHesap)
