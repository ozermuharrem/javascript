// Event Listeners 

// eleman ile kullanıcı arasın da ki etkileşim 

// kullanıcı butona basmış mı vs vs 

// event oluşturmak için nesneyi seçmek lazim 

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

// clik tıklama 
// fonksiyon oluşturulacak 
btn.addEventListener('click',function(e){
  
    let val;

    val = e;

    val = e.target; // hangi butonun tıklandığını gösterir 
    val = e.target.id; // tıklanan objenin id si 
    val = e.target.classList; // class listesi
    val = e.type; // 

    console.log(val);

    e.preventDefault();

});

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }