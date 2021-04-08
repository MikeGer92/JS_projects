require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let calc = require('./js/parts/calc.js');
    let form = require('./js/parts/form.js');
    let modal = require('./js/parts/modal.js');
    let slider = require('./js/parts/slider.js'); 
    let tabs = require('./js/parts/tabs.js');
    let timer = require('./js/parts/timer.js');

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

});