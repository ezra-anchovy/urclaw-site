const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navMenu.dataset.open = String(!expanded);
        document.body.classList.toggle('menu-open', !expanded);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.dataset.open = 'false';
            document.body.classList.remove('menu-open');
        });
    });
}

document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) {
        return;
    }

    button.addEventListener('click', () => {
        const next = item.dataset.open !== 'true';
        item.dataset.open = String(next);
        button.setAttribute('aria-expanded', String(next));
    });
});
