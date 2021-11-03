export default function softScroll() {
    const internalLinks = document.querySelectorAll(
        '[data-menu="soft"] a[href^="#"]'
    );

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //forma alternativa
        /* const top = section.offsetTop;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        }); */
    }

    internalLinks.forEach((a) => a.addEventListener('click', scrollToSection));
}
