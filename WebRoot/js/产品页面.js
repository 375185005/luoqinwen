/**
 * Created by Administrator on 2017/4/9 0009.
 */
$(function(){
    $('#smallimg1').mouseenter(function(){
        $('#bigimg1').show()
        $('#bigimg3').hide()
        $('#bigimg4').hide()
        $('#bigimg5').hide()
        $('#bigimg2').hide()
    })
    $('#smallimg2').mouseenter(function(){
        $('#bigimg1').hide()
        $('#bigimg3').hide()
        $('#bigimg4').hide()
        $('#bigimg5').hide()
        $('#bigimg2').show()
    })
    $('#smallimg3').mouseenter(function(){
        $('#bigimg1').hide()
        $('#bigimg3').show()
        $('#bigimg4').hide()
        $('#bigimg5').hide()
        $('#bigimg2').hide()
    })
    $('#smallimg4').mouseenter(function(){
        $('#bigimg1').hide()
        $('#bigimg3').hide()
        $('#bigimg4').show()
        $('#bigimg5').hide()
        $('#bigimg2').hide()
    })
    $('#smallimg5').mouseenter(function(){
        $('#bigimg1').hide()
        $('#bigimg3').hide()
        $('#bigimg4').hide()
        $('#bigimg5').show()
        $('#bigimg2').hide()
    })
    var val=parseInt($('#number').val());
    $('#up').click(function(){
        $('#number').val(++val);
    })
    $('#down').click(function(){
        $('#number').val(--val);
    })

    $('.product-details').click(function(){
            //  $(this).css('border','red');
            //$(this).css('border','solid');
            $(this).css('border','1px solid gray');
             $(this).css('border-top','2px solid red');
        $(this).css('border-bottom','0');
            $(this).css('fontWeight','bold')
             $(this).css('color','red')
            $('.assess').css('color','black')
             $('.assess').css('border','0');

        $('.productDetailDiv').css('display','block')
        $('.assessDiv').css('display','none')
    })

    $('.assess').click(function(){
        //  $(this).css('border','red');
        //$(this).css('border','solid');
        $(this).css('border','1px solid gray');
        $(this).css('border-top','2px solid red');
        $(this).css('border-bottom','0');
        $(this).css('fontWeight','bold')
        $(this).css('color','red')
        $('.product-details').css('color','black')
        $('.product-details').css('border','0');
        $('.productDetailDiv').css('display','none')
        $('.assessDiv').css('display','block')
    })


});