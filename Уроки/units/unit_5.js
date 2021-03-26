let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'pink';
btn[1].style.borderRadius = '100%';
btn[3].style.height = '80px';
btn[4].style.backgroundColor = 'lightblue';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'brown';
// };
// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });
let div = document.createElement('div'),
    text = document.createTextNode('Тут был я!');

div.classList.add('black');

document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1> Hello World</h1>';

div.textContent = 'Hello World';

// document.body.insertBefore(div, circle[1]);
// document.body.removeChild(btn[2]);
// document.body.replaceChild(circle[1], btn[1]);


console.log(text);