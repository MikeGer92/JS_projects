'use strict';
let btn = document.getElementsByTagName('menu-item'),
    title = document.getElementById('title'),
    column = document.querySelector('.column')[1],
    menuBtn = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    adv = document.getElementsByClassName('adv')[0];


let div = document.createElement('li');
div.classList.add('menu-item');
menu.appendChild(div);
div.innerHTML = 'Пятый пункт';
title.innerHTML = 'Мы продаем только оригинальную технику Apple';
// title.textContent = "Мы продаем только подлинную технику Apple";
adv.style.backgroundColor = 'green';
adv.remove();
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
menu.insertBefore(menuBtn[2], menuBtn[1]);

// let menu = document.getElementsByClassName("menu")[0],
// menuItem = document.getElementsByClassName("menu-item"),
// title = document.getElementById("title"),
// adv = document.getElementsByClassName("adv")[0],
// promptforApple = document.querySelector("#prompt"),
// menuItemLi = document.createElement("li");

// menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

// menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
// menuItemLi.textContent = "Пятый элемент";                       
// menu.appendChild(menuItemLi);                                   


// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


// title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

// adv.remove();                                                   // Удалить рекламу со страницы

// let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
// promptforApple.textContent = yourOpinion;