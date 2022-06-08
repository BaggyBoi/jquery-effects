$("#hS").click(function () {
    $("#hSv").toggle()
    if ($("#hS").text() == "HIDE") {
        $("#hS").text("SHOW")
    }
    else {
        $("#hS").text("HIDE")
    }
});
$("#fO").click(function () {
    if ($("#fO").text() == "FADE OUT") {
        $("#fOv").fadeOut();
        $("#fO").text("FADE IN")
    }
    else {
        $("#fOv").fadeIn();
        $("#fO").text("FADE OUT")
    }
});
$("#f25").click(function () {
    if ($("#f25").text() == "FADE TO 25%") {
        $("#f25v").fadeTo("slow", 0.25);
        $("#f25").text("FADE BACK")
    }
    else {
        $("#f25v").fadeTo("slow", 1);
        $("#f25").text("FADE TO 25%")
    }
});
$("#sD").click(function () {
    $("#sDv").slideToggle();
    if ($("#sD").text() == "SLIDE DOWN") {
        $("#sD").text("SLIDE UP")
    }
    else {
        $("#sD").text("SLIDE DOWN")
    }
});
$("#aB").click(function () {
    if ($("#aB").text() == "ANIMATE") {
        $("#aB").text("ANIMATE BACK")
        $("#aBv").animate({bottom:"50px"},"fast")
        $("#aBv").animate({top:"100px"},"fast")
        $("#aBv").animate({top:"0px"},"fast")
        $("#aBv").animate({right:"100px"},"fast")
        $("#aBv").animate({left:"500px"},"fast")
    }
    else {
        $("#aB").text("ANIMATE")
        $("#aBv").animate({left:"0px"},"fast")
    }
});
$("#sT").click(function () {
    if ($("#sT").text() == "START") {
        $("#sT").text("STOP")
        $("#sTv").animate({fontSize:"100px"},10000)
    }
    else {
        $("#sT").text("START")
        $("#sTv").stop()
    }
});
$("#c").click(function () {
    if ($("#c").text() == "CHANGE THIS TEXT") {
        $("#c").text("CHANGE BACK")
        $("#cv").text("I was changed.")
    }
    else {
        $("#c").text("CHANGE THIS TEXT")
        $("#cv").text("Text")
    }
});