export default function initAccordionList() {
    const accordionList = document.querySelectorAll(
        '[data-anime="accordion-list"] dt'
    );

    if (accordionList.length) {
        const disableClass = 'disable';

        accordionList.forEach((item) => {
            item.classList.add(disableClass);
            item.nextElementSibling.classList.add(disableClass);
        });

        accordionList[0].classList.remove(disableClass);
        accordionList[0].nextElementSibling.classList.remove(disableClass);

        accordionList.forEach((question) =>
            question.addEventListener('click', toggleAnswer)
        );

        function toggleAnswer() {
            this.classList.toggle(disableClass);
            this.nextElementSibling.classList.toggle(disableClass);
        }
    }
}
