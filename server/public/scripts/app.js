$(document).ready(function(){
  loadData();

var sigmanauts = {}; //set sigmanauts as an empty array
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

        function loadStudent(data, i){
          $('#ajax-data').append('<div class="sigmanauts"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<p>'+ "Name: " + data.sigmanauts[i].name + '</p>');
          $el.append('<p>'+ "Git Username: " + data.sigmanauts[i].git_username + '</p>');
          $el.append('<p>'+ "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');
          $el.append('<button id="next"> NEXT </button>');
          if(i>0){
          $el.append('<button id="prev"> PREV </button>');
          }
        }

          loadStudent(data, i);

          $( "#next" ).click(function() {
            $('.sigmanauts').remove();
            i++;
            loadStudent(data, i);
            console.log(i);
          });
      }
    });
  }
});
