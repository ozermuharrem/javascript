let val;

val = window.document; // bütün document objesi
console.log(val);
val = document.all; // tüm document elemanları
console.log(val);
val = document.all.length; // tüm element lerin sayısı
console.log(val);
val = document.all[10];// document elementinin 10uncu dizisi
console.log(val);
val = document.head; // document in head tagına ulaşabiliriz
console.log(val);
val = document.body; // body etiketine ulaşabiliriz
console.log(val);
val = document.anchors; // bütün linkleri alabiliriz
console.log(val);
val = document.URL; // sayfanının şuanki url si
console.log(val);
val = document.domain; // sayfanın domain 
console.log(val);
val = document.images; // resimlere 
console.log(val);
val = document.title; // title bilgisi
console.log(val);
val = document.forms; // form bilgisi
console.log(val);
val = document.forms[0]; // 0 ıncı indexdeki form 
console.log(val);
val = document.forms[0].id; // ilgili formun id si 
console.log(val);
val = document.forms[0].method; // ilgili formun method 
console.log(val);
val = document.forms[0].action; // atanan actionu
console.log(val);
val = document.scripts; // sayfadaki bütün scripts i 
console.log(val);
val = document.scripts[2]; // 2.indexde ki scripti 
console.log(val);
val = document.scripts[2].getAttribute('src'); // 2.scriptin attributesi
console.log(val); 


// SAYFA ÜZERİNDE ELEMENT SEÇİMİ 

// ** Single Elements (tek eleman seçme elemanı) 

let sel; 

sel = document.getElementById('header'); // html sayfasında ki ıd disi header olan elementleri seçer.  

sel = document.getElementById('header').id;
console.log(sel);

sel = document.getElementById('header').className; // 

console.log(sel); 

sel = document.getElementById('header');

// sel = sel.id; 
/*

yukarıda ki örnekte sel değeri ile elementin id sine ulaşyıktan sonmra 
her hefasında getElementById dememize gerek yok 

sel = sel.id; diyerek kısa yoldan seçtiğimiz elemente ulaşabiliriz 

*/

console.log(sel);

sel.style.fontSize='45px'; // yazı büyüklüğü
sel.style.color='blue'; //yazı rengi 
sel.style.fontWeight='bold'; // yazı kalınlığı

/*
yukarıda da görüldüğü gibi biz html sayfasına ulaşabildiğimiz için sayfa içerisinde bir takım değişiklikler yapabiliriz. 

degisken.style.özellik='değer'; şeklinde tanımlanır 
*/

sel = document.getElementById('header').innerText='Benim Yapılacak İşler Listem'; //İnnerText ile yazıyı değiştirebiliriz 


document.getElementById('header').innerHTML='<i> Benim Liste </i>'; //innerHtml ile htmle etiketi de ekleyebiliriz 

//tek element secerken değişken yazmadan 
// document.getElementById('text'); yazılabilri 



// document.querySelector()

console.log(document.querySelector('#header')); // id sine göre seçim yapılabilir selector ile  

console.log(document.querySelector('.card-header')); // class ına göre seçme 

// burda önemli olan birden fazla aynı class a sahip etiket olabilir bunlardan ilk geleni seçer ilk sıradakini 

console.log(document.querySelector('h1')); // etikete göre seçme sayfada ki ilk h1 etiketini seçer 

document.querySelector('li').style.color='red'; // ilk li etiketini kırmızı yaptı 

document.querySelector('li:last-child').style.color='orange' // son li etiketini turuncu yaptı 

document.querySelector('li:nth-child(2)').style.color='yellow';

//querySelector getElementById ye göre daha esnek 

document.querySelector('li:nth-child(3)').textContent='bitmez listeler'
; // etiket içerisinde ki text i degistirmek için kullanılablir innerText ile aynı  

document.querySelector('li').classList.add('active'); // mevcut olan class içerisine yeni bir class ekledi 

//classList.add(); metodunu değil "className='text'" tanımlasaydık mevcut class ismini siler text olarak değiştirirdi. 


// ** Multiple Elements (birden fazla eleman seçimi) 

// class name ye göre seçim

let kel = document.getElementsByClassName('list-group-item'); // class ı list-group-item olan tüm elementleri seçti 

console.log(kel);

// kel = document.getElementsByClassName('list-group-item')[0]; // list-group-item 0 inci indekteki elemanı seçti 


// console.log(kel);

// kel = document.getElementsByClassName('list-group-item')[2]; // list-group-item 2 inci index deki elemanı seçti 

// console.log(kel);

// kel = kel[3]; // bu şekilde de kullanım olabilri 

kel[1].style.color='white';
kel[1].style.fontSize='35px';

for(let i = 0 ; i < kel.length ; i ++){
    console.log(kel[i].style.color='#fff');
} // for dongüsü ile style işlemleri yapılabilir ahanda örnek sana 

// document.getElementsByTagName('li'); sayfa daki tüm etiketlere göre seçilebilir 

// document.querySelectorAll('li'); sayfa üzerinde ki tüm li etiketleririni seçer 

kel = document.querySelectorAll('li');

kel.forEach(function(item,index){
    item.textContent=`${index}-to do item`
}); // forEach kullanımı örnegi 

// *** SAYFA ÜZERİNE YENİ ELEMNT OLUŞTURMA 

// creating Elements

const li = document.createElement('li');

li.className='list-group-item list-group-item-secondary';

li.setAttribute('title','new item');
li.setAttribute('data-id','5');

// text node oluşturmak içim 

const text = document.createTextNode('new item');

li.appendChild(text);

const a = document.createElement('a'); // a etiketi oluşturma

a.setAttribute('href','#'); // a etiketi href ekleme

a.className='delete-item float-right'; // a etiketi class ekleme

a.innerHTML= '<i class ="fas fa_times"></i>'; // a etiketi içine i etiketi oluşturma 

li.appendChild(a); // li etiketi altına a etiketi ekleme 

document.querySelector('#task-list').appendChild(li); // ul etiketin altına li ekleme 

console.log(li);

// ETİKET SİLEM VE DEĞİŞTİRME İŞLEMİ 

//REMOVING & CHANGING NODES

const taskList = document.querySelector('#task-list'); // id si task-list olan etikete yani tüm ul etiketine ulaştık 

//removing element 

// taskList.remove(); // ul etiketi silinir

// taskList.childNodes[1].remove(); // alt eleman silme

// taskList.removeChild(taskList.children[3]); // taskList listesinin çocuklarından 3 üncüsünü silme

// removing attribute 

// taskList.children[1].removeAttribute('class'); // attribute silme class attribute si silindi 1.çocugun 

/* for(let i = 0 ; i < taskList.children.length ; i ++){
    taskList.children[i].removeAttribute('class');
} */

// replacing Elements 

const cardHeader = document.querySelector('.card-header'); // ilk sıra daki card header classı olanları seçtik 

//create element yeni element ekleme işlemi değitirmek için 

const h2 = document.createElement('h2'); // h2 etiketi oluşturma 

h2.setAttribute('class','card-header'); // class ı card-header olan bir attribute ekleme 

h2.appendChild(document.createTextNode('h2 ekleme'));

const parent = document.querySelector('.card');

parent.replaceChild(h2,cardHeader);

console.log(cardHeader);