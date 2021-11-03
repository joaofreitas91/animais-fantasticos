export default function openModal() {
    const btnLogin = document.querySelector('.menu li:last-child a');
    const btnCloseModal = document.querySelector('.close-modal');
    const modal = document.querySelector('.modal-container');

    btnLogin.addEventListener('click', open);
    btnCloseModal.addEventListener('click', close);

    function open(event) {
        event.preventDefault();
        modal.classList.add('active');
    }
    function close() {
        modal.classList.remove('active');
    }
}
