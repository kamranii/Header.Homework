//select elements
//home
const home = document.querySelector('#home');
//icon
const arrow = document.querySelector('#dropdown-icon');
//dropdown
const dropdown = document.querySelector('#dropdown-list-container');

//click event
home.addEventListener('click', ()=>{
    arrow.classList.toggle('fa-angle-down');
    arrow.classList.toggle('fa-angle-up');
    home.classList.toggle('active');
    dropdown.classList.toggle('hide');
});

