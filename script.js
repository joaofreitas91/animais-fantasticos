window.addEventListener('load', () => {
    initAnimationScroll();
    softScroll();
    initTabNav();
    initAccordionList();
    goHome();
    yearFooter();
});

function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const viewHeight = window.innerHeight * 0.5;
        const buttonHome = document.querySelector('[data-anime="go-home"]');

        function animationScroll() {
            const faqTop = sections[0].getBoundingClientRect().top;

            if (faqTop > 0) {
                buttonHome.classList.add('disable');
            } else {
                buttonHome.classList.remove('disable');
            }

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - viewHeight < 0;

                if (isSectionVisible) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }
        animationScroll();

        window.addEventListener('scroll', animationScroll);
    }
}

function softScroll() {
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

function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll(
        '[data-tab="content"] section'
    );
    const sections = document.querySelectorAll('.animals-description section');

    sections.forEach((animal, index) => {
        if (index % 2 === 0) {
            animal.dataset.anime = 'show-down';
        } else {
            animal.dataset.anime = 'show-right';
        }
    });

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
            });
            const dataset = tabContent[index].dataset.anime;
            tabContent[index].classList.add('active', dataset);
        }
    }
}

function initAccordionList() {
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

function goHome() {
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

function yearFooter() {
    const footer = document.querySelector('footer');
    const date = new Date();
    const year = date.getFullYear();

    const paragraphFooter = document.createElement('p');
    paragraphFooter.innerHTML = `Todos os direitos reservados ${year}`;

    footer.appendChild(paragraphFooter);
}
