// 我要開始玩JS操作精細動畫囉


$("#gry").click(
    function() {
        $(this).removeClass("col-3 gry p p_show")
        $(this).addClass("col-6 gry_ani p_ani")
        $("#rav,#huf,#sly").addClass("p_hide")

    }
)

$("#rav").click(
    function() {
        $(this).removeClass("col-3 rav p p_show")
        $(this).addClass("col-6 rav_ani p_ani")
        $("#gry,#huf,#sly").addClass("p_hide")

    }
)

$("#huf").click(
    function() {
        $(this).removeClass("col-3 huf p p_show")
        $(this).addClass("col-6 huf_ani p_ani")
        $("#gry,#rav,#sly").addClass("p_hide")

    }
)

$("#sly").click(
    function() {
        $(this).removeClass("col-3 sly p p_show")
        $(this).addClass("col-6 sly_ani p_ani")
        $("#gry,#rav,#huf").addClass("p_hide")

    }
)

$("div .col-2").click(
    function() {
        $("#gry,#rav,#huf,#sly").removeClass("col-6 gry_ani rav_ani huf_ani sly_ani p_ani p_hide")
        $("#gry,#rav,#huf,#sly").addClass("col-3 p p_show")
        $("#gry").addClass("gry")
        $("#rav").addClass("rav")
        $("#huf").addClass("huf")
        $("#sly").addClass("sly")

    }
)