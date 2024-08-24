const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const dropdownMenu = document.getElementById('dropdown-menu');

openMenuBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('open');
});

const buttons = document.querySelectorAll('.form-btn, .create-acc-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.closest('div').querySelector('input');
        if (input) {
            input.value = '';
        }
    });
});