// ボタンを押すと要素が開く動作
// const items = document.querySelector('.items');
const items01 = document.querySelector('.items01');
const items02 = document.querySelector('.items02');
const button01 = document.querySelector('.buttonContent01');
const button02 = document.querySelector('.buttonContent02');

console.log(items01);
// console.log(button01);


button01.addEventListener('click', function () {
    items01.classList.toggle('open');
});

button02.addEventListener('click', function () {
    items02.classList.toggle('open');
});
