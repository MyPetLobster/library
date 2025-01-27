// NAVBAR - Create relationship between avatar and name link
const avatarBox = document.querySelector('.avatar-box');
const nameLink = avatarBox.previousElementSibling;

avatarBox.addEventListener('mouseover', () => {
    nameLink.style.backgroundColor = 'var(--highlight-bg)';
    nameLink.style.color = 'var(--primary-light)';
});
nameLink.addEventListener('mouseover', () => {
    nameLink.style.backgroundColor = 'var(--highlight-bg)';
    nameLink.style.color = 'var(--primary-light)';
});

avatarBox.addEventListener('mouseout', () => {
    nameLink.style.backgroundColor = 'transparent';
    nameLink.style.color = 'var(--primary-dark)';
});
nameLink.addEventListener('mouseout', () => {
    nameLink.style.backgroundColor = 'transparent';
    nameLink.style.color = 'var(--primary-dark)';
});
avatarBox.addEventListener('click', () => {
    nameLink.click();
});

// NAVBAR - Hero Div Link
const heroDiv = document.querySelector('.nav-hero-div');
heroDiv.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// NAVBAR - Solid BG on scroll
const navbar = document.querySelector('.nav-container');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-bg');
        navbar.querySelectorAll('a').forEach(link => {
            link.classList.add('scrolled-link');
            heroDiv.querySelector('p').classList.add('scrolled-link');
        }
        )
    } else {
        navbar.classList.remove('scrolled-bg');
        navbar.querySelectorAll('a').forEach(link => {
            link.classList.remove('scrolled-link');
            heroDiv.querySelector('p').classList.remove('scrolled-link');
        });
    }
});