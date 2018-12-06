// 我要開始玩JS操作精細動畫囉


$("#gry").click(
    function() {
        // $(this).css({
        //     "background-image": "url(https://i.imgur.com/EaI4UpW.jpg)",
        //     "height": "580px",
        //     "border-radius": "0%"
        // })
        $(this).removeClass("col-3")
        $(this).removeClass("gry")
        $(this).addClass("ani")
        $(this).addClass("col-6")
            // $(this).toggleClass("ani")

        $(".HS,.rav").css("height", "0px")

    }
)

$("div .col-2").click(
    function() {
        // $(".gry").css({
        //     "background-image": "url(https://i.imgur.com/9G7wc3v.jpg)",
        //     "height": "280px",
        //     "border-radius": "50%"
        // })
        $("#gry").removeClass("col-6")
        $("#gry").removeClass("ani")
        $("#gry").addClass("gry")
        $("#gry").addClass("col-3")
        $(".HS,.rav").css("height", "280px")

    }
)