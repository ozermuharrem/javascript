// tamplate Literals 

const fullName = 'Betül Özer';
const city = 'Tokat';
const yearOfBrith = 1991;

let val;

val = 'my name is '+fullName+
       ' I am '+(2021-yearOfBrith)+' years old'+' and I live in '+city;

console.log(val);  

//yukarı da ki kısım string birleştime ile yapıldı 

// tamplate ile aşagıda yapılmıştır 

let tamp;
// alt gr virgül*2 yapınca `` şekli çıkar 
tamp = `my name is ${fullName} I am ${2021-yearOfBrith} years old and I live in ${city}`;

console.log(tamp);

// daha da dinamik hale getirebiliriz 

tamp = `my name is ${fullName} I am ${(2021-yearOfBrith>=18)?'over 18':'under 18'} years old and I live in ${city}`;

console.log(tamp);


//yukarıda ki yaş hesaplama işleminde soru sorduk cevap true ise ilk yazılan over 18 yazcak eğer false ise under 18 yazacak 