window.onload = function (ev) {
    setTimeout(function () {
        var iframe = document.createElement('iframe');
        iframe.src = 'https://checkvist.com/checklists?widget=true&lg=1';

        var main = document.querySelector('main');
        main.innerHTML = '';
        main.appendChild(iframe);
    }, 0)
};
