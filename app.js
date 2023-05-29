$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

$('#scrollUpArrow').on('click', function() {
    $('body, html').animate({
        scrollTop : 0}, 700);
    }
    );


function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

$('#subscribePopupButton').on('click', function() {
    $('#popupWindow').addClass('visible');
    $('#overlay').addClass('visible');
}
);

$('#closeButton').on('click', function() {
    $('#popupWindow').removeClass('visible');
    $('#overlay').removeClass('visible');
}
);

$("form").submit(function(event) {
    event.preventDefault();
    if ($("#emailField").val() == '') {
        $('#emailField').addClass('error');
        $('#errorMessage').removeClass('hidden');
    }
    else {
        $("#emailField").removeClass('error');
        $('#errorMessage').addClass('hidden');
    }
});

$("#emailField").focus(function() {
    $('#errorMessage').addClass('hidden');
    $('#emailField').removeClass('error');}
);

$('#popupWindow').on('click', function(event)
{
    if (event.target.id == 'popupWindow'){
    $('#overlay').removeClass('visible');
    $('#popupWindow').removeClass('visible');}
    }
);

$('document').ready(function()
{
$('#menuContainer').on('click','a',function(event)
{
    event.preventDefault();
    var id = $(this).attr('href'), 
    top = $(id).offset().top;
    $('body.html').animate({scrollTop:top}, 8000);
});
});

window.addEventListener('load', function () {
    setBodyLoaded();
});

function setBodyLoaded() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
