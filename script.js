window.addEventListener("load", () => {
    yearFooter()
})


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

const yearFooter = () => {
    const footer = document.querySelector('footer');
    const date = new Date();
    const year = date.getFullYear();

    const paragraphFooter = document.createElement('p');
    paragraphFooter.innerHTML = `Todos os direitos reservados ${year}`;

    footer.appendChild(paragraphFooter);
}

