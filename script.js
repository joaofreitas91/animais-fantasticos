window.addEventListener("load", () => {
    yearFooter()
    initTabNav()
    initAccordionList()
})

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');

        tabMenu.forEach((li, index) => {
            li.addEventListener('click', () => {
                activeTab(index);
            });
        });

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }
    }
}

function initAccordionList() {
    const accordionList = document.querySelectorAll('.js-accordion-list dt');

    if (accordionList.length) {

        const disableClass = 'disable';

        accordionList.forEach((item) => {
            item.classList.add(disableClass);
            item.nextElementSibling.classList.add(disableClass);
        });

        accordionList[0].classList.remove(disableClass);
        accordionList[0].nextElementSibling.classList.remove(disableClass);

        accordionList.forEach((question) => question.addEventListener('click', toggleAnswer));

        function toggleAnswer() {
            this.classList.toggle(disableClass);
            this.nextElementSibling.classList.toggle(disableClass);
        }
    }
}

function yearFooter() {
    const footer = document.querySelector('footer');
    const date = new Date();
    const year = date.getFullYear();

    const paragraphFooter = document.createElement('p');
    paragraphFooter.innerHTML = `Todos os direitos reservados ${year}`;

    footer.appendChild(paragraphFooter);
}

