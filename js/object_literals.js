// object literals

// bir kullanıcın bilgisini tutmak için kullanılır kullanıcı ile sınırlandır mayalım bilgi tutmak için kullanılır 
let val;

let personel = {
    firstName : 'Muharrem',
    lastName : 'Özer',
    age : 4,
    hobi :['koşmak','kitap okumak'],
    adres :{
        sehir : 'Tokat',
        ulke : 'Türkiye'
    },
    getBrithYear : function(){
        return 2021- this.age; // aynı nesnenin içerisinde ki değişkenlere ulaşmak için "this" demek gerekli önemli  
    }
};

console.log(personel);

val = personel.firstName;

console.log(val);

val = personel.lastName;

console.log(val);

val = personel['firstName'];

console.log(val);

val = personel.age;

console.log(val);

val = personel.hobi;

console.log(val);

val = personel.hobi[1];

console.log(val);

val = personel.hobi.length;

console.log(val);

val = personel.adres;

console.log(val);

val = personel.adres.ulke;

console.log(val);

val = personel.getBrithYear(); // getBrithYear fonksiyon olduğu için parantez eklendi sonuna 

console.log(val); 

let insanlar = [{}] // [{}] dizi çeklinde birden fazla veri tutabiliriz. 

let people = [
    {ad : 'Betül',soyad : 'Özer'},
    {ad : 'Ahmet',soyad : 'Özer'},
    {ad : 'Yumak',soyad : 'Özer'}
];


val = people[0];

console.log(val);

val = people[2].ad;

console.log(val); 

for(let i = 0 ; i < people.length ; i ++){
    console.log(people[i]);
}

for(let i = 0 ; i < people.length ; i ++){
    console.log(people[i].ad);
}
