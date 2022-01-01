// Demo : Strings 

console.log("Uygulama 5 String");

console.log("\n");

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

console.log("sentence :"+sentence+"\n"+"url : ",url);

console.log("\n");

// cümle kaç karakterlidir? 
console.log("1-cümle kaç karakterlidir?");

console.log("\n");

console.log("cümle",sentence.length,"karekterdir");

console.log("\n");

// kaç kelimeden oluşuyor ?
console.log("2-kaç kelimeden oluşmaktadır");

console.log("\n");

console.log(sentence.trim().split(' ').length+" kelimeden oluşmaktadır");

/* trim ile başta ve sonda ki boşlukları aldık split ile cümle içerisinde ki boşluklardan böldül leng ile o bölüm sayısını yazdırdık */

console.log("\n");
// Tüm cümleyi küçük harfe çevirin.
console.log("3-Tüm cümleyi küçük harfe çevirin.");
console.log("\n");

console.log(sentence.toLocaleLowerCase());

console.log("\n");
// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log("4-Cümlenin başındaki ve sonundaki boşlukları siliniz.");
console.log("\n");

console.log(sentence.trim());

console.log("\n");
// '-' karakterini silin.
console.log("5-'-' karakterini silin.");
console.log("\n");

console.log(sentence.replace('-',''));

/* replace ile tire silindi */

console.log("\n");
// url'nin içinden str kısmını çıkarınız.
console.log("6-url'nin içinden str (http://) kısmını çıkarınız.");
console.log("\n");

var str = 'http://';

console.log(url.replace('http://','')); //benim yaptığım 
console.log("\n");
console.log(url.substr(str.length)); // hocanın yaptığı 

console.log("\n");

console.log(url.slice(str.length));// slice str nin lengi 6 olduğu için 6 dan snrasını gösterdi 

// url hangi protocol'u kullanmaktadır ? (http,https) 
console.log("\n");

console.log("7-url hangi protocol'u kullanmaktadır ? (http,https)");
console.log("\n");

console.log("http :",url.startsWith('http'));

console.log("https :",url.startsWith('https'));

console.log("\n");
// url, '.com' ifadesini içeriyor mu?
console.log("8-url, '.com' ifadesini içeriyor mu?");
console.log("\n");

console.log(url.indexOf('.com')+". satırda .com vardır");

console.log(url.includes('.com'));

console.log("\n");
// url string ifadesini geçerli bir url olarak düzenleyiniz. 
console.log("9-url string ifadesini geçerli bir url olarak düzenleyiniz.");

console.log("\n");

console.log(url.toLowerCase() //küçükharfe çevirdik
    .replace(/ /g   ,'-') // yanda ki örnekte / /g cümledeki slaşlar arasına yazılan tüm karekterleri bul demek 
    .replace(/ı/g,'i')
    .replace(/ü/g,'u')
    .replace(/ö/g,'o')
    .replace(/ş/g,'s')
    .replace(/ç/g,'c')
);

