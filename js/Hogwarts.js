// 我要開始玩JS操作精細動畫囉

// entrance 玄關動畫
$("button").click(
    function() {
        $("#entrance").fadeOut(1000)
    }
)

$("#gry").click(
    function() {
        var check = $("#gry").has("h5").length
        console.log($("#gry").has("h5").length)
        if (check == 0) {
            $(this).removeClass("col-3 gry p p_show")
            $(this).addClass("col-6 gry_ani p_ani")
            $("#rav,#huf,#sly").addClass("p_hide")
                // console.log("TT")
            $(this).html("<h5>葛來分多的始創人是高錐客·葛來分多（Godric Gryffindor），代表著勇氣、勇敢、膽量和騎士氣慨，代表顏色是猩紅色和金色，對應於火的元素。葛萊分多的吉祥物是獅子。學院負責人是變形學教授兼副校長麥米奈娃教授，直到她成為校長。學院的鬼魂是尼古拉斯·德米西·波普頓爵士，人稱「差點沒頭的尼克」。</h5>")
        } else {}

    }
)

$("#rav").click(
    function() {
        var check = $("#rav").has("h5").length
        console.log($("#rav").has("h5").length)
        if (check == 0) {
            $(this).removeClass("col-3 rav p p_show")
            $(this).addClass("col-6 rav_ani p_ani")
            $("#gry,#huf,#sly").addClass("p_hide")

            $(this).html("<h5>雷文克勞的始創人是羅威娜·雷文克勞（Rowena Ravenclaw），代表著智慧，創造力，學習和穎悟力。代表顏色是藍色和古銅色（電影中是藍色和灰色），對應空氣的元素，而吉祥物是鷹。學院負責人是魔咒學的教授菲力·孚立維（Filius Flitwick），學院的鬼魂是雷文克勞的女兒海倫娜·雷文克勞（灰女士）。</h5>")
        } else {}

    }
)

$("#huf").click(
    function() {
        var check = $("#huf").has("h5").length
        console.log($("#huf").has("h5").length)
        if (check == 0) {
            $(this).removeClass("col-3 huf p p_show")
            $(this).addClass("col-6 huf_ani p_ani")
            $("#gry,#rav,#sly").addClass("p_hide")

            $(this).html("<h5>赫夫帕夫的始創人是海加·赫夫帕夫（Helga Hufflepuff），代表著努力、耐心、正義和忠誠。代表顏色是鮮黃色和黑色，對應土的元素。赫夫帕夫的吉祥物是獾。學院負責人是草藥學教授帕莫娜·芽菜（Pomona Sprout）。學院的鬼魂是胖修士。</h5>")
        } else {}
    }
)

$("#sly").click(
    function() {
        var check = $("#sly").has("h5").length
        console.log($("#sly").has("h5").length)
        if (check == 0) {
            $(this).removeClass("col-3 sly p p_show")
            $(this).addClass("col-6 sly_ani p_ani")
            $("#gry,#rav,#huf").addClass("p_hide")

            $(this).html("<h5>史萊哲林的始創人是薩拉札·史萊哲林（Salazar Slytherin），代表著雄心勃勃，精明，領導才能及足智多謀。史萊哲林的吉祥物是蛇，代表顏色是綠色和銀色，對應的元素是水。在《哈利波特與神秘的魔法石》中，分類帽說史萊哲林的人會做任何事情來達到目的。賽佛勒斯·石內卜在《死神的聖物》前是史萊哲林的學院負責人，後來石內卜成為校長後由前學院負責人赫瑞司·史拉轟，在退休後重掌權力。學院的鬼魂是血腥男爵。</h5>")
        } else {}
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

        $("#gry,#rav,#huf,#sly").html("")
    }
)