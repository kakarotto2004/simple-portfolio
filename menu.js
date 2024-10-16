const burger = document.querySelector('#burger');
const closeBtn = document.querySelector('#close');
const menu = document.querySelector('#menu');
const burgerBg = document.querySelector('#burgerBg');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        burger.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        closeBtn.classList.add('block');
        burgerBg.classList.add('bg-gray-100');
    }
});

closeBtn.addEventListener('click', () => {
    burger.classList.remove('hidden');
    menu.classList.add('hidden');
    closeBtn.classList.add('hidden');
    closeBtn.classList.remove('block');
    burgerBg.classList.remove('bg-gray-100');
});
