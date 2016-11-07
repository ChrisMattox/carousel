$(document).ready(function(){
  loadData();

var i = 0;

//make clientside Ajax call
function loadData() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        sigmanauts = data;
            console.log(data);


//adds first person to the DOM

        loadStudent(data, i);
        clicked();

        //append students to the dom
        function loadStudent(data, i){
          $('#ajax-data').append('<div class="sigmanauts"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<p>'+ "Name: " + data.sigmanauts[i].name + '</p>');
          $el.append('<p>'+ "Git Username: " + data.sigmanauts[i].git_username + '</p>');
          $el.append('<p>'+ "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');

        }

          function clicked(){
          //next button
          $("#next").click(function() {
            $('.sigmanauts').remove();
            i++;
            if (i === 19) {
              i = 0;
            }
            // $(".bottom-index").children().css("background-color", "green");

            // console.log(studentID);
            $(".indexClass").each(function(index, student) {
              // console.log(student);
              // $(this) gets us the jQuery object
              // student is the HTML string
              if($(this).data("id") == i) {
                // matched
                $(this).css("background-color", "green");
              } else {
                $(this).css("background-color", "red");
              }
            })

            // var studentID = $(".indexClass");
            // for (var i = 0; i < studentID.length; i++) {
            //     console.log($(this));
            //   // if (studentID[i].data("id")== i){
            //     // studentID[i].css("background-color", "green");
            //   // }
            //
            // }

            loadStudent(data, i);
            console.log(i);


          });

          //previous button
          $("#prev").click(function() {
            $('.sigmanauts').remove();
            i--;
            if (i === -1) {
              i = 18;
            }
            loadStudent(data, i);

            $(".indexClass").each(function(index, student) {
              // console.log(student);
              // $(this) gets us the jQuery object
              // student is the HTML string
              if($(this).data("id") == i) {
                // matched
                $(this).css("background-color", "green");
              } else {
                $(this).css("background-color", "red");
              }
            })

          });

        }

        addBottomIndex();

        //appends bottom index
        function addBottomIndex(){
        for (var j = 0; j < data.sigmanauts.length; j++) {
        $(".bottom-index").append('<div class="indexClass">' + j + '</div>');
        $(".bottom-index").children().last().data('id', j);

        }
      }
      }
    });
  }
});


//functions that didnt work!!! ARGH


// function addActive(){
//   $("#bottom-index").children().css("background-color", "red");
//   $("#" + i).addClass('active');
// }

// $(".indexClass").click(function() {
//   var currentStudent = i;
//   loadStudent(data, i);
// });
