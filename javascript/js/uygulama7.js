// if else -- swich case 
/*
 20.04.2017 tarihinde trafiğe çıkan bir aracın bakım süresi aşağıda verilmiştir. 

 Bu bilgilere göre servis uyarısını veriniz. 
 
 1.Bakım : 1 yıl 
 2.Bakım : 2 yıl
 3.Bakım : 3 yıl 

 */

 var trafigeCikis = new Date('04/20/2019');
trafigeCikis.setHours(0,0,0,0);
var trafiktekiMs = Date.now() - trafigeCikis.getTime();

var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24)); //milisaniye to saniye to dakika to saat to gün

if(trafiktekiGun<=365){
    console.log('1.servis bbakım süreniz geldi');
}
else if(trafiktekiGun>365 && trafiktekiGun <=365*2){
    console.log('2.servis bakım süreniz geldi');
}
else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log('3.servis bakım süreniz geldi');
}
else{
    console.log('Bakım süreleriniz bitmiştir.');
}


console.log(trafiktekiGun);


 /* 
                                                    BEGİN 
                                                      |  
                                                Who's there ? 

        Cancel                         Other                     Admin
           |                             |                         |                 
        Canceled                  I don't know you             Password?
                                                                    | 
                                                                    |
                                                                    |
                                                      Cancel      Other     TheMaster    
                                                        |           |            |
                                                    Canceled  Wrong Password  Welcome
 
    */ 


console.log('2.EXAM');
console.log('\n\n');

var result = prompt("Who's there ? "); //prompt ile diyalog kutusu aracılığı ile kullanıcadan bilgi alabilriz 

if(result == 'cancel'){
    console.log('cancelled');
}
else if(result == 'admin'){
    console.log('Welcome Admin');
    
    var passwod = prompt('Enter your password : ')

    if(passwod == 'cancel'){
        console.log('canselled');
    }
    else if(passwod == '1234'){
        console.log('Welcome Admin');
    }
    else{
        console.log('Wrong password');
    }
}
else{
    console.log('I dont know you');
}