import outsideClick from './outsideClick.js';

function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = ['touchstart', 'click'];

    if (menuButton) {
        function openMenu(event) {
            menuButton.classList.add('active');
            menuList.classList.add('active');

            outsideClick(menuList, events, () => {
                menuButton.classList.remove('active');
                menuList.classList.remove('active');
            });
        }
        events.forEach((event) => {
            menuButton.addEventListener(event, openMenu);
        });
    }
}

export default initMenuMobile;
