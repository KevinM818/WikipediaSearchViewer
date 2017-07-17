$(document).ready(function() {
  function getResults(searchTerm) {
    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm,
      dataType: "jsonp",
      success: function(response) {
        $("#results").html("");
        for (var i = 0; i < response[1].length; i++) {
          $("#results").append(
            "<a href=" +
              response[3][i] +
              " target='_blank'><div class='well'><h3>" +
              response[1][i] +
              "</h3><p>" +
              response[2][i] +
              "</p></div></a>"
          );
        }
      }
    });
  }
  
  $("button").on("click", function(){
    getResults($("#searchTerm").val());
  })
  
  $("#searchTerm").keypress(function(e){
    if(e.keyCode === 13){
       getResults($("#searchTerm").val());
       }
  });
  
});