import outsideClick from './outsideClick.js';

export default function initDropDown() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    dropdownMenus.forEach((menu) => {
        ['click', 'touchstart'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active');
        const events = ['click', 'touchstart'];

        outsideClick(this, events, () => {
            this.classList.remove('active');
        });
    }
}
