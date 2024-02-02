
// connection header.html to all pages
// fetch('html/components/header.html')
//     .then(response => response.text())
//     .then(html => document.getElementById('header').innerHTML = html);


    // Функция для асинхронной загрузки и вставки HTML-кода компонента
    function loadComponent(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}

    // Загрузка и вставка компонента header.html в контейнер headerContainer
    loadComponent('html/components/header.html', 'header');

