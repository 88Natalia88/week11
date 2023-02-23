
let price1 = document.querySelector('.price1').textContent;
let price2 = document.querySelector('.price2').textContent;
let price3 = document.querySelector('.price3').textContent;
let price4 = document.querySelector('.price4').textContent;
let price = document.querySelector('.price').textContent;
let percent1 = price1 - (price1 / 100 * 20);
let percent2 = price2 - (price2 / 100 * 20);
let percent3 = price3 - (price3 / 100 * 20);
let percent4 = price4 - (price4 / 100 * 20);
let percent = price - (price / 100 * 20);
function changePrice(){
price = document.querySelector('.price').textContent = percent;
price1 = document.querySelector('.price1').textContent = percent1;
price2 = document.querySelector('.price2').textContent = percent2;
price3 = document.querySelector('.price3').textContent = percent3;
price4 = document.querySelector('.price4').textContent = percent4;
}
