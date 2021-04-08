require('es6-promise').polyfill();
require('formdata-polyfill')
import 'nodelist-foreach-polyfill';
import calc from './parts/calc.js';
import form from './parts/form.js';
import modal from './parts/modal.js';
import slider from './parts/slider.js';
import tabs from './parts/tabs.js';
import timer from './parts/timer.js';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';


    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

});