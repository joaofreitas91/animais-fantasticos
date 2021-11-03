export function goHome() {
    const buttonHome = document.querySelector('[data-anime="go-home"]');
    buttonHome.addEventListener('click', goToHome);

    function goToHome(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}

export function yearFooter() {
    const footer = document.querySelector('footer');
    const date = new Date();
    const year = date.getFullYear();

    const paragraphFooter = document.createElement('p');
    paragraphFooter.innerHTML = `Todos os direitos reservados ${year}`;

    footer.appendChild(paragraphFooter);
}
