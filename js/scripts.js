function loadComponent(componentUrl, containerId, callback) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
            if (callback) {
                callback(); // Вызываем функцию обратного вызова после успешной загрузки содержимого
            }
        });
}

function loadComponentFooter(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

// Загрузка header.html и добавление обработчика событий после загрузки
loadComponent('header.html', 'header', function() {
    let toggle = document.getElementById('toggle');
    let box = document.getElementById('menu');

    toggle.addEventListener('click', function() {
        box.classList.toggle('active');
    });
});

// Загрузка footer.html
loadComponentFooter('footer.html', 'footer');


