export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const viewHeight = window.innerHeight * 0.8;
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
                    if (!section.classList.contains('active')) {
                        section.classList.add('active');
                    }
                }
            });
        }
        animationScroll();

        window.addEventListener('scroll', animationScroll);
    }
}
