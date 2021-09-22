$(document).ready(function(){
  let count=0;

  $("#addNewButton").click(function(){
    $("<input>").attr({
      placeholder : "Enter your name",
      class : "nameClass form-control mt-3" 
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
      if(value){
        count++;
        markup = "<tr><th>"+count+"</th><td>"+value+"</td></tr>";
        tableBody = $("table");

        tableBody.append(markup);
        $("table").css({"visibility": "visible"});
      }
      else {window.alert("None value entered")}
    });
     resetForm();
     

   }); 

}); 