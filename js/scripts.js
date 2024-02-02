
// connection header.html to all pages
fetch('../html/components/header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

