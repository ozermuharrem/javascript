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
  
let x = '\n'
for(let y = 0; y <= 10 ; y++){ 
    for(let j = 0; j<= 10 ; j++){
        x +='* ';
   }  
   x+='\n';
}

console.log(x);