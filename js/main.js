document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.js-btn-1, .js-btn-2, .js-btn-3, .js-btn-4, .js-btn-5, .js-btn-6, .js-btn-7');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills.forEach(skill => {
                    skill.classList.add('animate');
                    observer.unobserve(skill);
                });
            }
        });
    });

    skills.forEach(skill => observer.observe(skill));
});


document.addEventListener('DOMContentLoaded', function () {
    const timelineWrapperObserver = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            // If I want to show the animation multiple time I need to add this "else"
            /*else  {
                entry.target.classList.remove('show');
            }*/
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => timelineWrapperObserver.observe(el));
});