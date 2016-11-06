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

        function loadStudent(data, i){
          $('#ajax-data').append('<div class="sigmanauts"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<p>'+ "Name: " + data.sigmanauts[i].name + '</p>');
          $el.append('<p>'+ "Git Username: " + data.sigmanauts[i].git_username + '</p>');
          $el.append('<p>'+ "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');

        }

          function clicked(){
          $("#next").click(function() {
            $('.sigmanauts').remove();
            i++;
            if (i === 19) {
              i = 0;
            }
            loadStudent(data, i);
            //
            // var clicking = $("#" + i).addClass("active");
           // $(clicking).addClass("active");
            // $(clicking).attr('id', 'active');
            // console.log(clicking);

          });

          $("#prev").click(function() {
            $('.sigmanauts').remove();
            i--;
            if (i === -1) {
              i = 18;
            }
            loadStudent(data, i);

          });

          $(".indexClass").click(function() {
            var currentStudent = i;
            loadStudent(data, i);
          });

        }

        addBottomIndex();
        addActive();
        function addBottomIndex(){
        for (var i = 0; i < data.sigmanauts.length; i++) {
        $(".bottom-index").append('<div class="indexClass" id="'+ i +' ">' + i + '</div>');
        }
      }
      function addActive(){
        $(".indexClass:first-child").addClass('active');
      }
      }
    });
  }
});
