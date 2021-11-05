export default function initModal() {
    const modal = document.querySelector('[data-modal="container"]');
    const btnLoginDesktop = document.querySelector(
        '[data-modal="open-desktop"]'
    );
    const btnLoginMobile = document.querySelector('[data-modal="open-mobile"]');
    const btnCloseModal = document.querySelector('[data-modal="close"]');

    function toggle(event) {
        event.preventDefault();
        modal.classList.toggle('active');
    }

    function closeModalOutside(event) {
        if (event.target === this) {
            modal.classList.remove('active');
        }
    }

    modal.addEventListener('click', closeModalOutside);
    btnLoginDesktop.addEventListener('click', toggle);
    btnLoginMobile.addEventListener('click', toggle);
    btnCloseModal.addEventListener('click', toggle);
}
