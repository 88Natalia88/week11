let price = document.querySelectorAll('.price');
let button = document.querySelector('.button');
function changePrice(){
    result = Number(price) - 20;
    return result;
}
button.addEventListener('click', changePrice);