$(document).ready(function(e) {
    $('nav button').on('click', changeSectionClickHandler);
    $('.add-picture-button').on('click', addPictureClickHandler);
});

function changeSectionClickHandler(e) {
    var section = e.target.getAttribute('data-target')
    changeSection(section);
}

function changeSection(sectionName) {
    $('.active').removeClass('active');
    $('.' + sectionName).addClass('active');
}

function addPictureClickHandler(e) {
    var url = $('.add-picture-url').val();
    addPicture(url);
}

function addPicture(url) {
    var html = '<img src="' + url +'" />';
    $('section.pictures img:last').after(html);
    $('.add-picture-url').val('');
}