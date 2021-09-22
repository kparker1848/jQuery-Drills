$(document).ready(function () {
    $("#btnSubmit").on("click", submitForm);

    $("#btnSubmit").attr("disabled", true);

    $("#textId").keyup(function () {
        if ($("input[type=text]").val() == "") {
            $("#btnSubmit").attr("disabled", true);
        } else if ($("input[type=text]").val() != "") {
            $("#btnSubmit").attr("disabled", false);
        }
    });

    const newDiv = $("<div></div>");
    $("body").append(newDiv);

    const newList = $("<ul></ul>");
    $(newDiv).append(newList);


    function submitForm() {
        let newItem = $("<li></li>");
        newItem.text(($("input[type=text]").val()));
        $(newList).append(newItem);

        $(newItem).click(changeColor);
        $(newItem).dblclick(function () {
            $(newItem).remove();
        });

        function changeColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            $(newItem).css("color", color);
        };

        //     let newH2 = $("<h2></h2>");
        //     $(newH2).append(($("input[type=text]").val()));
        //     $(newDiv).append(newH2);

        //     $(newH2).mouseover(function () {
        //         $(this).css({ "background-color": "darkseagreen", "border-radius": "25px" });
        //     });
        //     $(newH2).mouseout(function () {
        //         $(this).css({ "background-color": "white", "border-radius": "0px" });
        //     });    
    };

});
