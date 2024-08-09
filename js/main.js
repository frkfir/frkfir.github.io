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
