$(document).ready(function(){
    $('h1').addClass('text-danger');

    // load menu
    $('header').load('menu.html', function() {
        console.log('After Menu');
    });
    });