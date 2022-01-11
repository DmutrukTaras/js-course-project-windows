import './slider';
import mod from './modules/modal';
import tabs from './modules/tabs'


window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    mod.modals();
    mod.test();

    tabs();

});