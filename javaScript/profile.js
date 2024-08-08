document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.discover-nav-item');
    const line = document.querySelector('.line');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.discover-nav-item.activ').classList.remove('activ');
            item.classList.add('activ');
            item.appendChild(line);
        });
    });
});

const navItems = document.querySelectorAll('.discover-nav-item');
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

const copyLinkButtons = document.querySelectorAll('.link-btn');

copyLinkButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const link = button.querySelector('.link').href;

        navigator.clipboard.writeText(link).then(() => {
            alert('Ссылка скопирована: ' + link);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    });
});

const followBtn = document.querySelector('#follow-btn');
const unfollowBtn = document.querySelector('#follow-btn-active');

followBtn.addEventListener('click', () => {
    followBtn.classList.add('none');
    unfollowBtn.classList.remove('none');
});

unfollowBtn.addEventListener('click', () => {
    unfollowBtn.classList.add('none');
    followBtn.classList.remove('none');
});

const followBtnTab = document.querySelector('#follow-btn-tab');
const unfollowBtnTab = document.querySelector('#follow-btn-active-tab');

followBtnTab.addEventListener('click', () => {
    followBtnTab.classList.add('none');
    unfollowBtnTab.classList.remove('none');
});

unfollowBtnTab.addEventListener('click', () => {
    unfollowBtnTab.classList.add('none');
    followBtnTab.classList.remove('none');
});
