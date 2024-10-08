document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.browse-nav-item');
    const line = document.querySelector('.line');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.browse-nav-item.activ').classList.remove('activ');
            item.classList.add('activ');
            item.appendChild(line);
        });
    });
});

const navItems = document.querySelectorAll('.browse-nav-item');
const pages = document.querySelectorAll('.profile-cards');

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

gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.browse-nav-item');
const activeNav = document.querySelector('.line');

links.forEach((link) => {
    link.addEventListener('click', () => {
        
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from (state, {
            duration: 0.5,
            absolute:true,
        })
    })
})