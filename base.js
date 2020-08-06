let i1 = document.getElementById('icon1');
let i2 = document.getElementById('icon2');
let i3 = document.getElementById('icon3');
let i4 = document.getElementById('icon4');

let nav_project = document.getElementById('project-nav');
let nav_cover = document.getElementById('cover-letter-nav');
let nav_resume = document.getElementById('resume-nav');
let nav_contact = document.getElementById('contact-nav');

let project = document.getElementById('project-container');
let cover = document.getElementById('cover-letter');
let contact = document.getElementById('contact');

// nav events
// nav_project.addEventListener ('click', function() {
//     i1.focus;
// });

// icon events
i1.addEventListener ('click', function() {
    i1.style.color = "rgb(149, 47, 245)";
    i3.style.color = "black";
    i4.style.color = "black";
    project.style.display = 'block';
    cover.style.display = 'none';
    contact.style.display = 'none';
});

i3.addEventListener ('click', function() {
    i1.style.color = "black";
    i3.style.color = "rgb(149, 47, 245)";
    i4.style.color = "black";
    cover.style.display = 'block';
    project.style.display = 'none';
    contact.style.display = 'none';
});

i4.addEventListener ('click', function() {
    i1.style.color = "black";
    i3.style.color = "black";
    i4.style.color = "rgb(149, 47, 245)";
    contact.style.display = 'block';
    project.style.display = 'none';
    cover.style.display = 'none';
});
