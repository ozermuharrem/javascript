// Demo Loops~Döngüler

/* 

Sayı Tahmin Oyunu 


1-10 arası rastgele sayı üretilen bir sayını aşağı yukarı ifadeleri ile bulmaya çalışın. 

* puanlama yapın.
** kullanıcı kaç kerede bileceğini belirtebilsin
*/
var hak,can;
var tahmin,sayac = 0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('Kaç Kerede Bileceksin'));
hak = can;
console.log(sayi)
while(hak>0){
    hak --;
    sayac ++;
    tahmin = Number(prompt('Bir Sayı Giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada Bildiniz`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);
        break;
    }
    else if(sayi < tahmin){
        console.log('aşağı');
    }
    else{
        console.log('yukarı');
    }
    if(hak == 0){

        console.log('hakkınız bitti.');
    }
}