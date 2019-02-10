//Desislava Dicheva
// November 18,2018

$( document ).ready(function() {
    $("#content").hide();
    $("#tabs").tabs();
    $("#more").click(function () {
        $("#content").toggle();
			return false;
    });
});

