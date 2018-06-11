(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: (target.offset().top - 54)
    }, 1000, "easeInOutExpo");
    return false;
  }
}
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
$('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
target: '#mainNav',
offset: 54
});

// Collapse the navbar when page is scrolled
$(window).scroll(function() {
if ($("#mainNav").offset().top > 300) {
  $("#mainNav").addClass("navbar-shrink");
  $("#mainNav").addClass("navbar-show");    
  $("#mainNav").removeClass("navbar-hide");
} else {
  $("#mainNav").removeClass("navbar-shrink");    
  $("#mainNav").removeClass("navbar-show");
  $("#mainNav").addClass("navbar-hide");
}
});

})(jQuery); // End of use strict

$(document).ready(function()

    {
    localStorage.sumitem = 0;
    localStorage.minusitem = 12;
    });
        
    $('div.more-items').hover(function()
    {
       $(this).children("p").fadeIn();
    }, function()
    { 
    // Mouse Leave callback
        $(this).children("p").fadeOut();
    });

    $('#kit-item-to-add-display').on('change', function()
    {
        $('#selected-box-type').val(-1);
        $('#kit-item-to-add').slideDown();
        $('html, body').animate({
            scrollTop: $("#kit").offset().top
        }, 500);
        //set item totals for kit
        $("#kit-item-totals").val(this.value);
        var items_to_add=this.value;
        //update kits options        
        for (k=1;k<=7;k++){
            $("#kit-0"+k).empty();
            for (i=1;i<=items_to_add;i++)
            {
                if (i!=$("#kit-item-0"+k+"-qty").val())
                    $("#kit-0"+k).append($("<option></option>").attr("value", i).text(i));
                else
                    $("#kit-0"+k).append($("<option></option>").attr("value", i).attr("selected",1).text(i));                
            }
        }
        items_to_add-=$("#kit-item-01-qty").val();
        items_to_add-=$("#kit-item-02-qty").val();
        items_to_add-=$("#kit-item-03-qty").val();
        items_to_add-=$("#kit-item-04-qty").val();
        items_to_add-=$("#kit-item-05-qty").val();
        items_to_add-=$("#kit-item-06-qty").val();
        items_to_add-=$("#kit-item-07-qty").val();
        $("#item-countdown").html(items_to_add+"");        
    });
    $('#n1').on('change', function()
    {
        var num=this.value*3.69;
        if (this.value<=0)
            num=12*3.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n2').on('change', function()
    {
        var num=this.value*3.69;
        if (this.value<=0)
            num=12*3.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n3').on('change', function()
    {
        var num=this.value*4.69;
        if (this.value<=0)
            num=12*4.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n4').on('change', function()
    {
        var num=this.value*4.69;
        if (this.value<=0)
            num=12*3.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n5').on('change', function()
    {
        var num=this.value*3.69;
        if (this.value<=0)
            num=12*3.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n6').on('change', function()
    {
        var num=this.value*6.69;
        if (this.value<=0)
            num=12*6.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    $('#n7').on('change', function()
    {
        var num=this.value*4.69;
        if (this.value<=0)
            num=12*4.69;
        var str=num.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        
        $(this).next().show();
        $(this).next().html("R$ <span class='price'>"+a[0]+"</span><span>,"+a[1]+"</span>");
    });
    
    var itemtemp = 0;
    var itemtotal = 0;
        
    $('#header1').on('click', function()
    {
        $('#header1').hide();   
        $('#header2').show();   
    });
        
    $('#header2').on('click', function()
    {
        $('#header2').hide();   
        $('#header1').show();   
    });
        
    $('#header3').on('click', function()
    {
        $('#header3').hide();   
        $('#header4').show();   
    });
        
    $('#header4').on('click', function()
    {
        $('#header4').hide();   
        $('#header3').show();   
    });
        
    $('button.btn-aditional').on('click', function()
    {
        $('#kit-item-01,#kit-item-02,#kit-item-03,#kit-item-04,#kit-item-05,#kit-item-06,#kit-item-07').hide();  
    });
    // Update prices
    $('#kit-01,#kit-02,#kit-03,#kit-04,#kit-05,#kit-06,#kit-07').on('change',function()
    {
        var kit=$(this).data('kit')
        //validate items
        this.value=validate_items(this.value,parseInt(kit));
        //update the quantity
        $("#kit-item-"+kit+"-qty").val(this.value);
        //visual update
        update_items_and_totals();
    });
        
    // ITEM ADD
    $('#kit-item-01-add').on('click', function()
    {
        items=validate_items(1,1);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-01-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-01').show();
            $('#kit-item-01-add').hide();
            $('#kit-item-01-remove').show();        
        }
    });
    $('#kit-item-02-add').on('click', function()
    {
        items=validate_items(1,2);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-02-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-02').show();
            $('#kit-item-02-add').hide();
            $('#kit-item-02-remove').show();        
        }
    });
    $('#kit-item-03-add').on('click', function()
    {
        items=validate_items(1,3);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-03-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-03').show();
            $('#kit-item-03-add').hide();
            $('#kit-item-03-remove').show();        
        }
    });
    $('#kit-item-04-add').on('click', function()
    {
        items=validate_items(1,4);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-04-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-04').show();
            $('#kit-item-04-add').hide();
            $('#kit-item-04-remove').show();        
        }
    });
    $('#kit-item-05-add').on('click', function()
    {
        items=validate_items(1,5);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-05-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-05').show();
            $('#kit-item-05-add').hide();
            $('#kit-item-05-remove').show();        
        }
    });
    $('#kit-item-06-add').on('click', function()
    {
        items=validate_items(1,6);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-06-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-06').show();
            $('#kit-item-06-add').hide();
            $('#kit-item-06-remove').show();        
        }
    });
    $('#kit-item-07-add').on('click', function()
    {
        items=validate_items(1,7);
        if (items>0)
        {
            //update the quantity
            $("#kit-item-07-qty").val(1);
            //visual update
            update_items_and_totals();
            $('#kit-07').show();
            $('#kit-item-07-add').hide();
            $('#kit-item-07-remove').show();        
        }
    });
    // ITEM REMOVE
        
    $('#kit-item-01-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-01-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-01').hide();
        $('#kit-item-01-add').show();
        $('#kit-item-01-remove').hide();
    });
    $('#kit-item-02-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-02-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-02').hide();
        $('#kit-item-02-add').show();
        $('#kit-item-02-remove').hide();
    });
    $('#kit-item-03-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-03-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-03').hide();
        $('#kit-item-03-add').show();
        $('#kit-item-03-remove').hide();
    });
    $('#kit-item-04-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-04-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-04').hide();
        $('#kit-item-04-add').show();
        $('#kit-item-04-remove').hide();
    });
    $('#kit-item-05-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-05-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-05').hide();
        $('#kit-item-05-add').show();
        $('#kit-item-05-remove').hide();
    });
    $('#kit-item-06-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-06-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-06').hide();
        $('#kit-item-06-add').show();
        $('#kit-item-06-remove').hide();
    });
    $('#kit-item-07-remove').on('click', function()
    {
        //update the quantity
        $("#kit-item-07-qty").val(0);
        //visual update
        update_items_and_totals();
        $('#kit-07').hide();
        $('#kit-item-07-add').show();
        $('#kit-item-07-remove').hide();
    });
    function update_items_and_totals(){
        //update items to add
        var items_to_add=$("#kit-item-totals").val();
        items_to_add-=$("#kit-item-01-qty").val();
        items_to_add-=$("#kit-item-02-qty").val();
        items_to_add-=$("#kit-item-03-qty").val();
        items_to_add-=$("#kit-item-04-qty").val();
        items_to_add-=$("#kit-item-05-qty").val();
        items_to_add-=$("#kit-item-06-qty").val();        
        items_to_add-=$("#kit-item-07-qty").val();        
        $("#item-countdown").html(items_to_add+"");
        if (items_to_add==0)
            $("#add-custom-box").show();
        else
            $("#add-custom-box").hide();
        //update order total
        var order_total=0.0;
        order_total+=$("#kit-item-01-qty").val()*$("#kit-item-01-price").val();
        order_total+=$("#kit-item-02-qty").val()*$("#kit-item-02-price").val();
        order_total+=$("#kit-item-03-qty").val()*$("#kit-item-03-price").val();
        order_total+=$("#kit-item-04-qty").val()*$("#kit-item-04-price").val();
        order_total+=$("#kit-item-05-qty").val()*$("#kit-item-05-price").val();
        order_total+=$("#kit-item-06-qty").val()*$("#kit-item-06-price").val();
        order_total+=$("#kit-item-07-qty").val()*$("#kit-item-07-price").val();
        $('#totalprice').html(order_total.toFixed(2));                
    }
    function validate_items(items,kit){
        //update items to add
        var items_to_add=parseInt($("#kit-item-totals").val());
        items_to_add-=parseInt($("#kit-item-01-qty").val());
        items_to_add-=parseInt($("#kit-item-02-qty").val());
        items_to_add-=parseInt($("#kit-item-03-qty").val());
        items_to_add-=parseInt($("#kit-item-04-qty").val());
        items_to_add-=parseInt($("#kit-item-05-qty").val());
        items_to_add-=parseInt($("#kit-item-06-qty").val());
        items_to_add-=parseInt($("#kit-item-07-qty").val());
        items_to_add+=parseInt($("#kit-item-0"+kit+"-qty").val());
        if (items_to_add-items>=0)
            items_to_return=items;
        else
            items_to_return=items_to_add;
        return items_to_return;       
    }    
    

	document.getElementById('kit-item-01-price').value = item_price[2][1];	
	document.getElementById('kit-item-02-price').value = item_price[5][1];
	document.getElementById('kit-item-03-price').value = item_price[1][1];
	document.getElementById('kit-item-04-price').value = item_price[0][1];
	document.getElementById('kit-item-05-price').value = item_price[3][1];
	document.getElementById('kit-item-06-price').value = item_price[4][1];
	document.getElementById('kit-item-07-price').value = item_price[6][1];