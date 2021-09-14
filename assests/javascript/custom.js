$(document).ready(function(){

  $("#addNewButton").click(function(){
    $("<input>").attr({
      placeholder : "Enter your name",
      class : "nameClass" 
    }).appendTo("#mainId");

  }); 

  function resetForm() {


    $(".nameClass").each(function() {
      $(this).remove();
    })
    $("#name").val("");
  }

  $("#submitButton").click(function(){

     // window.alert("submitButton");
     $(".mainClass input").each(function(index) {
      value = $(this).val();
      markup = "<tr><td>"+index+1+"</td><td>"+value+"</td></tr>";
      tableBody = $("table");
      tableBody.append(markup);
    });
     resetForm();

   }); 

}); 