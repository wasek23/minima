// Start Responsive Menu
$(document).ready(function () {
    $(".toggleSpan").click(function () {
        $("ul").toggle(500);
    });

    $(".toggleSpan1").click(function () {
        $(this).hide();
        $(".toggleSpan2").show();
    });
    $(".toggleSpan2").click(function () {
        $(this).hide();
        $(".toggleSpan1").show();
    });
});
// Finish Responsive Menu
