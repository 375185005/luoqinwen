/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(function(){
    $('.span1').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('position','absolute')
        $('#catear').css('left','410px').css('top','-8px');
        $('#catear').css('display','inline')
    })
    $('.span1').mouseleave(function(){
        $('#catear').hide();
    })

    $('.span2').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('position','absolute')
        $('#catear').css('left','530px').css('top','-8px');
        $('#catear').css('display','inline')
    })
    $('.span2').mouseleave(function(){
        $('#catear').hide();
    })
    $('.span3').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('position','absolute')
        $('#catear').css('left','640px').css('top','-8px');
        $('#catear').css('display','inline')
    })
    $('.span3').mouseleave(function(){
        $('#catear').hide();
    })
    $('.span4').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('position','absolute')
        $('#catear').css('left','740px').css('top','-8px');
        $('#catear').css('display','inline')
    })
    $('.span4').mouseleave(function(){
        $('#catear').hide();
    })

    $('.span5').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('position','absolute')
        $('#catear').css('left','820px').css('top','-8px');
        $('#catear').css('display','inline')
    })
    $('.span5').mouseleave(function(){
        $('#catear').hide();
    })
    $('.span6').mouseenter(function(){
        $('#catear').show();
        $('#catear').css('height','15')
        $('#catear').css('display','inline')
        $('#catear').css('position','absolute')
        $('#catear').css('left','900px').css('top','-8px');
    })
    $('.span6').mouseleave(function(){
        $('#catear').hide();
    })

    $("div.eachCategory").mouseenter(function(){
            var cid = $(this).attr("cid");
            $("div.productsAsideCategorys[cid="+cid+"]").show();
            $(this).css('background','white')
            $('#myCarousel').css('display','none')
        });

        $("div.eachCategory").mouseleave(function(){
            var cid = $(this).attr("cid");
            $("div.productsAsideCategorys[cid="+cid+"]").hide();
            $(this).css('background','#e2e2e3')
            $('#myCarousel').css('display','block')
        });

        $("div.productsAsideCategorys").mouseenter(function(){
            $(this).show();
        });

        $("div.productsAsideCategorys").mouseleave(function(){
            $(this).hide();
        });

        //$("div.rightMenu span").mouseenter(function(){
        //    var left = $(this).position().left;
        //    var top = $(this).position().top;
        //    var width = $(this).css("width");
        //    var destLeft = parseInt(left) + parseInt(width)/2;
        //    $("img#catear").css("left",destLeft);
        //    $("img#catear").css("top",top-20);
        //    $("img#catear").fadeIn(500);
        //
        //});
        //$("div.rightMenu span").mouseleave(function(){
        //    $("img#catear").hide();
        //});
        //
        //var left = $("div#carousel-of-product").offset().left;
        //$("div.categoryMenu").css("left",left-20);
        //$("div.categoryWithCarousel div.head").css("margin-left",left);
        //$("div.productsAsideCategorys").css("left",left-20);

    //});




});