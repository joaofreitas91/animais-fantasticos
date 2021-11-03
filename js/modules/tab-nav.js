export default function initTabNav() {
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
