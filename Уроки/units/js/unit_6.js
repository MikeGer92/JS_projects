let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');


// btn[2].onclick = function () {
//     alert('Вы нажали третью кнопку');
// };
// btn[1].addEventListener('click', function () {
//     alert('Вы нажали вторую кнопку');
// });
// btn[1].addEventListener('click', function () {
//     alert('Вы опять нажали вторую кнопку');
// });
// btn[0].addEventListener('mouseenter', function () {
//     alert('Вы навели на первую кнопку');
// });
// btn[4].addEventListener('click', function (event) {
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });
wrap.addEventListener('click', function (event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('Вышли!');
    });
});