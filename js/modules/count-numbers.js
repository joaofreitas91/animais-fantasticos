function initCountNumbers() {
    function animateNumbers() {
        const numbers = document.querySelectorAll('[data-number');

        numbers.forEach((number) => {
            const total = +number.innerText;
            const increment = Math.floor(total / 100);
            let start = 0;

            const counter = setInterval(() => {
                start = start + increment;
                number.innerText = start;
                if (start > total) {
                    number.innerText = total;
                    clearInterval(counter);
                }
            }, 50 * Math.random());
        });
    }

    const observerTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {
        attributes: true,
    });

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('active')) {
            observer.disconnect();
            animateNumbers();
        }
    }
}

export default initCountNumbers;
