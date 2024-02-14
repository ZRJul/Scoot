
// connection header.html to another pages
function loadComponent(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}


loadComponent('../components/header.html', 'header');


function loadComponentFooter(componentUrl, containerId) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => document.getElementById(containerId).innerHTML = html);
}


loadComponentFooter('../components/footer.html', 'footer');