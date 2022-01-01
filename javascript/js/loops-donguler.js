// loops DÖNGÜLER 

//for loop 

for(let i = 0; i<10 ; i++){
    if(i == 3){
    console.log('en sevdiğim rakam'+i);
    continue; // döngünün devam etmesi için 
    }
    console.log(i);
}

// while loop 

let a = 0;

while(a <= 10){
    console.log(a);
    a++;
}

// do-while 

let b = 0; 
do{
    console.log(b);
    b++;
}
while(b <= 10) 

// yıldız yapabilir miyim acaba 

console.log("---------------\n\n");
  
let x = '\n';
for(let y = 0; y <= 10 ; y++){ 
    for(let j = 0; j<= 10 ; j++){
        x +='* ';
   }  
   x+='\n';
}
console.log(x);

console.log('Çarpım Tablosu \n\n')

let m;
let s = 8;
for(m = 0; m <= 10 ; m++){
    console.log(m+" * "+s+" = "+m*s);
}

console.log("1 den 50 ye Kadar Olan Sayıların çarpımı");

let tpl = 1;

for(let c=1;c<=5;c++){
    tpl*=c;
}
console.log(`Sonuç ${tpl}`);



// dizi ve objeler üzerinde döngüler 

let cars=['bmw','Merso','Reno'];


for(let g = 0 ; g<cars.length ; g ++){
    console.log(cars[g]);
}

// for in 

for(let g in cars){
    console.log(`index : ${g} value : ${cars[g]}`);
}


// for foreach


cars.forEach(function(item){
    console.log(item);
});

//obje ile kullanımı 


let human =[
    {firstName:'Muharrem',lastName:'Özer'},
    {firstName:'Betül',lastName:'Özer'},
    {firstName:'Ahmet',lastName:'Özer'}
];

for(let o=0; o<human.length;o ++){
    console.log(human[o].firstName)
}


for(let o in human){
    console.log(`index : ${o} value ${human[o].firstName}`)
} 

human.forEach(function(humans){
    console.log(humans.firstName);
});

// map dizileri geriye döndürme 

let val = human.map(function(humans)
{
    return humans.firstName + ' ' + humans.lastName
});

console.log(val); 

let numbers = [1,2,3,4,5,6,7,8,9];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);