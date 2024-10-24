$(function () {
    $("tr:even").css("background-color", "#909994");
    $("tr:odd").css("background-color", "#aebbb2");
    $("td").css("font-size", "small");
    $("td").css("font-weight", "bold");
    $("td").css("color", "#f3f1f1");
});
$(function () {
    $("#research").accordion({
        collapsible: true
    });
    $("#research").find("h4").css("font-weight", "bold");
    //$("#research").css("background-color", "#56c086");
    $("#research").find("p").css("font-style", "italic");
    $("#research").find("p").css("font-size", "small");
    //$("#research").find("p").css("background-color", "#8be4b3");
    //$("#research").find("p").css("color", "#126034");
});
