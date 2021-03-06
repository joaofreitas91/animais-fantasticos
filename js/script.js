import animationScroll from './modules/animation-scroll.js';
import softScroll from './modules/soft-scroll.js';
import tabNav from './modules/tab-nav.js';
import accordionList from './modules/accordion-list.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/drop-down.js';
import initMenuMobile from './modules/menu-mobile.js';
import initCountNumbers from './modules/count-numbers.js';
import initStoreOpened from './modules/store-opened.js';

//import { goHome, yearFooter } from './modules/home-footer.js'; //Forma importão padrão mais de uma função.
import * as homeAndFooter from './modules/home-footer.js'; // Importa todas as funções e dá um apelido.

window.addEventListener('load', () => {
    animationScroll();
    softScroll();
    tabNav();
    accordionList();
    initModal();
    initTooltip();
    initDropDown();
    initMenuMobile();
    initCountNumbers();
    initStoreOpened();
    homeAndFooter.goHome();
    homeAndFooter.yearFooter();
});
