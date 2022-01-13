import './slider';
import mod from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/formData';
import changeModalState from './modules/changeModalState';
import checkNumInputs from './modules/checkNumInputs';
import checkFormValid from './modules/checkFormValid';
import timer from './modules/timer';
import images from './modules/images';


window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let modalState = {};
    changeModalState(modalState);

    mod.modals();
    mod.test();
    tabs();
    forms(modalState);
    checkNumInputs();
    checkFormValid();
    images();
    timer('timer', '2022-02-01');

});