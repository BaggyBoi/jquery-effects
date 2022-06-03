$("#hS").click(function () {
    $("#hSv").toggle()
    if($("#hS").text() == "HIDE"){
        $("#hS").text("SHOW")
    }
    else{
        $("#hS").text("HIDE")
    }
});
$("#fO").click(function () {
    if($("#fO").text() == "FADE OUT"){
        $("#fOv").fadeOut();
        $("#fO").text("FADE IN")
    }
    else{
        $("#fOv").fadeIn();
        $("#fO").text("FADE OUT")
    }
});
$("#f25").click(function () {
    if($("#f25").text() == "FADE TO 25%"){
        $("#f25v").fadeTo("slow", 0.25  );
        $("#f25").text("FADE BACK")
    }
    else{
        $("#f25v").fadeTo("slow", 1);
        $("#f25").text("FADE TO 25%")
    }
});
$("#sD").click(function () {
    $("#sDv").slideToggle();
    if($("#sD").text() == "SLIDE DOWN"){
        $("#sD").text("SLIDE UP")
    }
    else{
        $("#sD").text("SLIDE DOWN")
    }
});
