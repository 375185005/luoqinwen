/**
 * Created by Administrator on 2017/4/10 0010.
 */
$(function() {

    $("img.cartProductItemIfSelected").click(function () {
        var selectit = $(this).attr("selectit")
        //alert(selectit)
        if ("selectit" == selectit) {
            $(this).attr("src", "img/site/cartNotSelected.png");
            $(this).attr("selectit", "false")
            $(this).parents("tr.cartProductItemTR").css("background-color", "#fff");
        }
        else {
            $(this).attr("src", "img/site/cartSelected.png");
            $(this).attr("selectit", "selectit")
            $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF8E1");
        }

    });
    $("img.selectAllItem").click(function () {
        var selectit = $(this).attr("selectit")
        if ("selectit" == selectit) {
            $("img.selectAllItem").attr("src", "img/site/cartNotSelected.png");
            $("img.selectAllItem").attr("selectit", "false")
            $(".cartProductItemIfSelected").each(function () {
                $(this).attr("src", "img/site/cartNotSelected.png");
                $(this).attr("selectit", "false");
                $(this).parents("tr.cartProductItemTR").css("background-color", "#fff");
            });
        }
        else {
            $("img.selectAllItem").attr("src", "img/site/cartSelected.png");
            $("img.selectAllItem").attr("selectit", "selectit")
            $(".cartProductItemIfSelected").each(function () {
                $(this).attr("src", "img/site/cartSelected.png");
                $(this).attr("selectit", "selectit");
                $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF8E1");
            });
        }
    });

})
