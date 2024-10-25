// JavaScript code to handle the close button click
openBTN = document.getElementById('openBtn');
closeBTN = document.getElementById('closeBtn');

sidebar = document.querySelector('aside')


closeBTN.addEventListener('click', function() {
    sidebar.style.display = 'none';
});



openBTN.addEventListener('click', function() {
    sidebar.style.display = 'block';
});

const themeToggler = document.querySelector('.theme-toggler');

ccchild1 = themeToggler.querySelector('span:nth-child(1)')
ccchild2 = themeToggler.querySelector('span:nth-child(2)')

themeToggler.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme-variables')
    ccchild1.classList.toggle('active')
    ccchild2.classList.toggle('active')
});


