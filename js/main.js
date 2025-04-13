$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');    

    /** click event on toggle */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-carousal for blog
    $('.owl-carousel').owlCarousel();
});