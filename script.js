window.addEventListener("load", () => {
    softScroll()
    initTabNav()
    initAccordionList()
    goHome()
    yearFooter()
})

const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    //forma alternativa
    /* const top = section.offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    }); */

}

internalLinks.forEach((a) => a.addEventListener('click', scrollToSection));


function softScroll() {
}

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

function goHome() {

    const buttonHome = document.querySelector('.up');
    buttonHome.addEventListener('click', goToHome);

    function goToHome(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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

