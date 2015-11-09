$(document).ready(function() {
    $('nav button').on('click', changeSectionClickHandler);
    $('.change-theme').on('click', changeTheme);
    $('.add-picture').on('click', addPictureClickHandler);
});

function changeSectionClickHandler(e) {
    changeSection($(this).data('target'));
}

function changeSection(section) {
    $('.active').removeClass('active');
    $('.' + section).addClass('active');
}

function changeTheme (e) {
    $('body').toggleClass('dark');
}

function addPictureClickHandler(e) {
    var url = $('.new-picture-url').val();
    addPicture(url);
    $('.new-picture-url').val('')
}

function addPicture(url) {
    $('.pictures img:last').after('<img src="' + url + '" />');
}
