$(document).ready(function(){
$.ajax({
  type: "GET",
  url: "/data",
  success: function(data){
    sigmanauts = data;
        console.log(data);
        //Get sumthin on tha DOM
        var students = data.sigmanauts;
        for (var i = 0; i < students.length; i++) {
          $("ajax-data").append(students[i].name);
        }
    }
  });
});
