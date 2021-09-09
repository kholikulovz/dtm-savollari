// const elList = document.querySelectorAll ('.list__item');

// console.log(elList);  

let elHeader = document.querySelector('.header');

let fail = 80;
let superContract = 100;
let contract = 150;
let grant = 200;

let score = prompt("To'plagan balingizni kiriting") -0


if( score < 80){
    elHeader.textContent = 'Siz talabalikka tavsiya etilmadingiz'
}else if (score > 80 && score < 100){
    let confirmStudent = confirm('Siz super kontrakt asosida qabul qilindingiz kontrakt 3000$ \n Rozimisiz ?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor?');
        if(userMoney >= 3000){
            elHeader.textContent = 'Siz talabasiz'
        }else{
        elHeader.textContent = 'Siz talaba emassiz chunki pulingiz kam'} 
    }
}
else if (score > 100 && score < 150){
    let confirmStudent = confirm('Siz  kontrakt asosida qabul qilindingiz kontrakt 2000$ \n Rozimisiz ?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor?')
        if(userMoney >= 2000){
            elHeader.textContent = 'Siz talabasiz'
        }else(userMoney < 3000) 
        elHeader.textContent = 'Siz talaba emassiz chunki pulingiz kam'
    }
}
else if (score > 150 && score <= 200){
    elHeader.textContent = 'Tabriklaymiz siz grant asosida talabalar safiga qabul qilindingiz'
}
























// if (score >= fail) {
//     if (score >= superContract) {
//         elHeader.textContent = 'kontraktga tushib qoldingiz'
//     }else {
//         let superMoney = prompt("superkontrakt miqdori yiliga 3000$. Qancha pulingiz bor?") -0
//         if (superMoney >= 3000) ;
//         elHeader.textContent = 'Tabriklaymiz superkontrakt asosida qabul qilindingiz'
//     }
// }else {
//     elHeader.textContent = 'Afsuski kira olmadingiz'
// }