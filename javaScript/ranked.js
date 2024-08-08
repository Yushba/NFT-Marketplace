document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.ranked-nav-item');
    const line = document.querySelector('.line');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.ranked-nav-item.activ').classList.remove('activ');
            item.classList.add('activ');
            item.appendChild(line);
        });
    });
});

const navItems = document.querySelectorAll('.ranked-nav-item');
const pages = document.querySelectorAll('.ranked-list');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('activ'));

        item.classList.add('activ');

        const pageId = item.id.replace('btn-', '');
        const activePage = document.getElementById(pageId);

        pages.forEach(page => page.classList.add('none'));

        activePage.classList.remove('none');
    });
});