function activePage() {
    var pageTitle = document.querySelector("title").innerHTML
    var pageLinks = document.querySelectorAll(".nav-link")
    for (i=0; i<document.querySelectorAll(".nav-link").length; i++) {
        var pageLinksTitle = pageLinks[i].innerHTML
    if (pageTitle === pageLinksTitle){
        pageLinks[i].classList.add("active-page")
    } else {
        pageLinks[i].classList.remove("active-page")
    }
    }
}

activePage()

for (i=0; i<document.querySelectorAll(".see-more-btn").length; i++) {
    document.querySelectorAll(".see-more-btn")[i].addEventListener("click", function (e) {

        if (e.target.classList.contains('fa-chevron-down')) {
            e.target.classList.remove('fa-chevron-down')
            e.target.classList.add('fa-chevron-up')
        } else if (e.target.classList.contains('fa-chevron-up')) {
            e.target.classList.remove('fa-chevron-up')
            e.target.classList.add('fa-chevron-down')
        }

        if (e.target.children[0].classList.contains('fa-chevron-down')) {
            e.target.children[0].classList.remove('fa-chevron-down')
            e.target.children[0].classList.add('fa-chevron-up')
        } else if (e.target.children[0].classList.contains('fa-chevron-up')) {
            e.target.children[0].classList.remove('fa-chevron-up')
            e.target.children[0].classList.add('fa-chevron-down')
        }

      })
}

jQuery(document).ready(function($) {
    $('*[data-href]').on('click', function() {
        window.location = $(this).data("href");
    });
});