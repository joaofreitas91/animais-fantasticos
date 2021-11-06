export default function initTooltip() {
    const sizeScreen = window.innerWidth;

    if (sizeScreen >= 650) {
        const tooltips = document.querySelectorAll('[data-tooltip]');
        tooltips.forEach((tooltip) =>
            tooltip.addEventListener('mouseover', onMouseOver)
        );

        function createTooltipBox(element) {
            const text = element.getAttribute('aria-label');

            const tooltipBox = document.createElement('div');
            tooltipBox.classList.add('tooltip');
            tooltipBox.innerHTML = text;
            document.body.appendChild(tooltipBox);

            return tooltipBox;
        }

        function onMouseOver(event) {
            debugger;
            const tooltipBox = createTooltipBox(this);

            onMouseMove.tooltipBox = tooltipBox;
            this.addEventListener('mousemove', onMouseMove);

            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;

            this.addEventListener('mouseleave', onMouseLeave);
        }

        const onMouseMove = {
            handleEvent(event) {
                this.tooltipBox.style.top = event.pageY + 20 + 'px';
                this.tooltipBox.style.left = event.pageX + 20 + 'px';
            },
        };

        const onMouseLeave = {
            handleEvent() {
                this.tooltipBox.remove();
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            },
        };
    }
}
