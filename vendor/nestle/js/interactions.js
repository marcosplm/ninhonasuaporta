(function($) {
  "use strict"; // Start of use strict

  var one,two,three,four,five;
  $(".boxes").change(this,function(){ 
    $("#selected-box-type").val($(this).data('pid'));
    $("#selected-box-qty").val(this.value);
    $(".add-boxes").attr('disabled','true');
    if (parseInt(this.value)>0)
      $(".add-boxes-"+$(this).data('pid')).removeAttr('disabled');
    else
      $(".add-boxes-"+$(this).data('pid')).attr('disabled',"true");
    $(".add-boxes-custom-kit").removeAttr('disabled');
    console.log($("#selected-box-type").val());
    console.log($("#selected-box-qty").val());
  });

  $("#continue").click(this, function(){
    $("#loading-message").html("enviando...");
    $("#submit-message").html("");  
    clearTimeout(two);
    clearTimeout(three);
    clearTimeout(four);        
    $("#ninho-form").submit();    
  });
  //submit the form after 5 seconds
  $(".add-boxes").click(this, function(){
    $("#submit-message").html("");
    two=setTimeout(function(){
      console.log(2);
      $("#submit-message").html("");
    },1000);
    three=setTimeout(function(){
      console.log(3);
      $("#submit-message").html("");
    },2000);
    four=setTimeout(function(){
      console.log(4);
      $("#submit-message").html("");
    },3000);
    setTimeout(function(){      
      $("#continue").click();      
    },4000);    
  });
})(jQuery); // End of use strict