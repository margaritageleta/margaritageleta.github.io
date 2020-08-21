var sdegree = 0;

$(window).scroll(function() {
    var height = "" + (20 - window.scrollY/100) + "vh";
    $("#border").css({"height" : height});
});