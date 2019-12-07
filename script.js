// About Me
$('#nav-about').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.about").offset().top
    });
})

// Portfolio
$('#nav-portfolio').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.portfolio").offset().top
    });
})

// Skills 
$('#nav-skills').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.skills").offset().top
    });
})

// Contact
$('#nav-contact').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.contact").offset().top
    });
})