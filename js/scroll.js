var sdegree = 0;

$(window).scroll(function() {
    var height = "" + (10 - window.scrollY/90) + "vh";
    $("#border").css({"height" : height});
});