// connection header.html to main pages



// Функция для асинхронной загрузки и вставки HTML-кода компонента
function loadComponent(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

// Загрузка и вставка компонента header.html в контейнер headerContainer
loadComponent('html/components/header.html', 'header');


function loadComponentFooter(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

// Загрузка и вставка компонента footer.html в контейнер headerContainer
loadComponentFooter('html/components/footer.html', 'footer');