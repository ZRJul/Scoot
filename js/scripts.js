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

document.addEventListener('DOMContentLoaded', () => {
    const contentDIV = document.querySelector('.content');
    const navLinks = document.querySelectorAll('.nav_link');

    function initializeAccordion() {
        let accordionToggles = document.querySelectorAll('.js-accordionTrigger');

        function skipClickDelay(e) {
            e.preventDefault();
            e.target.click();
        }

        function setAriaAttr(el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty);
        }

        function setAccordionAria(el1, el2, expanded) {
            switch (expanded) {
                case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                default:
                    break;
            }
        }

        function switchAccordion(e) {
            e.preventDefault();
            let thisAnswer = e.target.parentNode.nextElementSibling;
            let thisQuestion = e.target;
            if (thisAnswer.classList.contains('is-collapsed')) {
                setAccordionAria(thisQuestion, thisAnswer, 'true');
            } else {
                setAccordionAria(thisQuestion, thisAnswer, 'false');
            }
            thisQuestion.classList.toggle('is-collapsed');
            thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('animateIn');
        }

        accordionToggles.forEach(function (toggle) {
            toggle.addEventListener('click', switchAccordion);
        });
    }


    const loadPage = (url) => {

        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('.content').innerHTML;

                contentDIV.classList.add('fade_out');
                contentDIV.innerHTML = newContent;
                document.title = doc.title;


                setTimeout(() => {
                    contentDIV.classList.remove('fade_out');
                    history.pushState({}, '', url);
                    initializeAccordion()
                }, 10);
            })


    };

    navLinks.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.currentTarget.getAttribute('href');
            loadPage(url);
        });
    });

    loadPage(window.location.pathname);

    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname);
    })

})
