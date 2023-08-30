function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScrollAnimations() {
    const animatedSections = document.querySelectorAll('.sobreMi');
    const animatedTechnologies = document.querySelectorAll ('.technologies-section')

    animatedSections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

    animatedTechnologies.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);