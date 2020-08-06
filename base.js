let i1 = document.getElementById('icon1');
let i2 = document.getElementById('icon2');
let i3 = document.getElementById('icon3');

let nav_project = document.getElementById('project-nav');
let nav_cover = document.getElementById('cover-letter-nav');

let project = document.getElementById('project-container');
let cover = document.getElementById('cover-letter');

// icon events
i1.addEventListener ('click', function() {
    i1.style.color = "rgb(149, 47, 245)";
    i3.style.color = "black";
    project.style.display = 'block';
    cover.style.display = 'none';
});

i3.addEventListener ('click', function() {
    i1.style.color = "black";
    i3.style.color = "rgb(149, 47, 245)";
    cover.style.display = 'block';
    project.style.display = 'none';
});


