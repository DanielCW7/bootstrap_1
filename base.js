let i1 = document.getElementById('icon1');
let i3 = document.getElementById('icon3');
let project = document.getElementById('project-container');
let cover = document.getElementById('cover-letter');

// icon events
i1.addEventListener ('click', function() {
    i1.style.color = 'rgb(149, 47, 245)';
    project.style.display = '';
    cover.style.display = 'none';
});

i3.addEventListener ('click', function() {
    i3.style.color = 'rgb(149, 47, 245)';
    cover.style.display = '';
    project.style.display = 'none';
});
