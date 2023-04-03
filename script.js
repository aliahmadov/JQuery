






$(document).ready(function () {



    function PadElements() {
        let elements = $("#nav").find("*").each(function () {


            console.log(this);
            $(this).css('padding', '20px')

        });
    }

    let isDone = true;
    let editClicked = false;

    $("#circle").click(function () {

        if (editClicked) {
            var input = $(`<input type='text' class='box' />`);
            PadElements();
            $("#circle").before(input);
            input.focus();

        }
    });


    $("#btn").click(function () {
        isDone = !isDone;

        if (!isDone) {
            editClicked = true;
            $(this).text("Done");
            $(this).css('color', 'white');
            $(this).css('background-color', 'darkgreen');
            var $input = $(`<input type='text' class='box' />`).val($("#box").text());
            $("#box").replaceWith($input);
            $input.focus();


            let elements = $("#nav").find("div").each(function () {


                var $input = $(`<input type='text' class='box' />`).val($(this).text());
                $(this).replaceWith($input);
                $(this).css('padding', '20px');
                $input.focus();

            });
            PadElements();
        }
        else {
            $(this).text("Edit");
            $(this).css('color', 'black');
            $(this).css('background-color', 'orange');


            editClicked = false;
            let elements = $("#nav").find("input").each(function () {


                var $box = $(`<div class='box' style='margin-bottom:5px'><div/>`).text($(this).val());
                $(this).replaceWith($box);


            });

            PadElements();

        }
    });


    let isVertical = false;

    $("#form").click(function () {

        if (!isVertical) {

            $("#nav").css('flex-direction', 'column');
            $("#nav").css('align-items', 'center');

            $(this).text('Horizontal');

            PadElements();
        }
        else {

            $("#nav").css('flex-direction', 'row');
            $("#nav").css('align-items', 'start');
            $("#nav").width("95%");
            $('#form').css('padding', '20px')
            $(this).text('Vertical');
            PadElements();
        }



        isVertical = !isVertical;
    });


});
