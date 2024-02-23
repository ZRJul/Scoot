// connection header.html_components to main pages



// Функция для асинхронной загрузки и вставки HTML-кода компонента
function loadComponent(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

// Загрузка и вставка компонента header.html_components в контейнер headerContainer
loadComponent('header.html', 'header');


function loadComponentFooter(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

// Загрузка и вставка компонента footer.html_components в контейнер headerContainer
loadComponentFooter('footer.html', 'footer');

