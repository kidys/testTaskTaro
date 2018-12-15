import 'styles/index.scss';

document.querySelectorAll('a').forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
    });
});

function handleHeaderBtn(e) {
    e.preventDefault();
    document.querySelector('.menuListWrapper_header').classList.toggle('menuListWrapper_header-mobileOpen');
};

document.querySelector('#headerMenuMobileBtnOpen').addEventListener('click', handleHeaderBtn);
document.querySelector('#headerMenuMobileBtnClose').addEventListener('click', handleHeaderBtn);
