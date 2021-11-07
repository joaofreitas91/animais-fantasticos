export default function initDropDown() {}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');
dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    console.log(event.type);
}
